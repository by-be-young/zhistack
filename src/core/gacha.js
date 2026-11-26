import { cards, cardsBySubject, subjects } from '../data/index.js'
import { GACHA } from './config.js'
import { nowISO } from './time.js'
import { spend } from './points.js'

export function rollRarity() {
  const r = Math.random()
  const { N, R, SR } = GACHA.rates
  if (r < GACHA.rates.SSR) return 'SSR'
  if (r < GACHA.rates.SSR + SR) return 'SR'
  if (r < GACHA.rates.SSR + SR + R) return 'R'
  return 'N'
}

function pickCard(rarity) {
  const pool = cards.filter(c => c.rarity === rarity)
  return pool[Math.floor(Math.random() * pool.length)]
}

/**
 * 抽卡：扣分、双保底、十连 R 保底、重复转碎片。
 */
export function pull(archive, count = 1) {
  const isTen = count === 10
  const cost = isTen ? GACHA.tenCost : GACHA.singleCost * count
  if ((archive.profile.points || 0) < cost) {
    return { ok: false, reason: 'points', cost, points: archive.profile.points || 0, short: cost - (archive.profile.points || 0) }
  }
  if (!spend(archive, 'gacha', cost, isTen ? '十连抽' : `${count} 连抽`)) {
    return { ok: false, reason: 'points', cost }
  }

  archive.cards ||= { owned: {}, shards: 0, pitySsr: 0, pityR: 0, history: [] }
  const results = []
  for (let i = 0; i < count; i++) {
    archive.cards.pitySsr = (archive.cards.pitySsr || 0) + 1
    archive.cards.pityR = (archive.cards.pityR || 0) + 1

    let rarity = archive.cards.pitySsr >= GACHA.pitySsr ? 'SSR' : rollRarity()
    const forcedSsr = archive.cards.pitySsr >= GACHA.pitySsr
    let forcedR = false
    if (isTen && i === 9 && rarity !== 'SSR' && !results.some(x => x.rarity !== 'N')) {
      rarity = 'R'
      forcedR = true
    }
    if (rarity === 'SSR') archive.cards.pitySsr = 0
    if (rarity !== 'N') archive.cards.pityR = 0

    const card = pickCard(rarity)
    const owned = archive.cards.owned[card.id]
    let dup = false
    let shards = 0
    if (owned) {
      dup = true
      shards = GACHA.shards[rarity]
      if (rarity === 'SR' && owned.count >= 3) shards += 10
      archive.cards.shards = (archive.cards.shards || 0) + shards
      owned.count += 1
      owned.lastAt = nowISO()
    } else {
      archive.cards.owned[card.id] = { count: 1, firstAt: nowISO() }
    }

    const record = { at: nowISO(), cardId: card.id, rarity, dup, shards, forcedSsr, forcedR }
    results.push(record)
    archive.cards.history.unshift(record)
    if (archive.cards.history.length > GACHA.historyLimit) archive.cards.history.length = GACHA.historyLimit
  }
  return { ok: true, results, cost, pitySsr: archive.cards.pitySsr, pityR: archive.cards.pityR }
}

export function stampStates(owned = {}) {
  return subjects.map(s => {
    const list = cardsBySubject[s.id] || []
    const got = list.filter(c => owned[c.id]).length
    return { subject: s, got, total: list.length, done: got === list.length && list.length > 0 }
  })
}

export function exchangeCard(archive, cardId) {
  const card = cards.find(c => c.id === cardId)
  if (!card) return { ok: false, reason: 'card' }
  if (card.rarity !== 'N' && card.rarity !== 'R') return { ok: false, reason: 'rarity' }
  if (archive.cards.owned[cardId]) return { ok: false, reason: 'owned' }
  const cost = GACHA.exchange[card.rarity]
  if ((archive.cards.shards || 0) < cost) return { ok: false, reason: 'shards', cost }
  archive.cards.shards -= cost
  archive.cards.owned[cardId] = { count: 1, firstAt: nowISO() }
  return { ok: true, cost }
}
