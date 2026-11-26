<script setup>
import { computed, ref } from 'vue'
import { archive, save } from '../storage/archive.js'
import { cards, cardsBySubject, cardById, rarityMeta, rarityOrder } from '../data/cards.js'
import { subjects, subjectMap } from '../data/index.js'
import { GACHA } from '../core/config.js'
import { pull, exchangeCard, stampStates } from '../core/gacha.js'
import { relativeDay } from '../core/time.js'
import { toast } from '../core/toast.js'
import CardFace from '../components/CardFace.vue'
import ModalDialog from '../components/ModalDialog.vue'
import EmptyState from '../components/EmptyState.vue'
import AppIcon from '../components/AppIcon.vue'

const tab = ref('ds')
const onlyOwned = ref(false)
const reveal = ref(null)
const revealKey = ref(0)
const confirmCard = ref(null)
const showHistory = ref(false)
const busy = ref(false)

const owned = computed(() => archive.cards?.owned || {})
const shards = computed(() => archive.cards?.shards || 0)
const points = computed(() => archive.profile.points || 0)
const pitySsr = computed(() => archive.cards?.pitySsr || 0)
const pityR = computed(() => archive.cards?.pityR || 0)
const pityLeft = computed(() => Math.max(0, GACHA.pitySsr - pitySsr.value))
const stamps = computed(() => stampStates(owned.value))
const history = computed(() => (archive.cards?.history || []).slice(0, 20))

const pool = computed(() => {
  let list = cardsBySubject[tab.value] || []
  if (onlyOwned.value) list = list.filter(c => owned.value[c.id])
  return [...list].sort((a, b) => rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity))
})
const collected = computed(() => cards.filter(c => owned.value[c.id]).length)

function doPull(n) {
  if (busy.value) return
  busy.value = true
  const r = pull(archive, n)
  busy.value = false
  if (!r.ok) {
    toast(`积分不足，还差 ${r.short ?? r.cost - points.value}`, 'warn')
    return
  }
  save(true)
  reveal.value = r
  revealKey.value++
}

const revealCards = computed(() => (reveal.value?.results || []).map(x => ({ ...x, card: cardById[x.cardId] })).filter(x => x.card))

function closeReveal() {
  reveal.value = null
}

function tryExchange(card) {
  if (owned.value[card.id]) return
  if (card.rarity !== 'N' && card.rarity !== 'R') { toast('SR / SSR 只能靠抽取获得', 'info'); return }
  confirmCard.value = card
}

function doExchange() {
  const c = confirmCard.value
  if (!c) return
  const r = exchangeCard(archive, c.id)
  if (!r.ok) {
    toast(r.reason === 'shards' ? `碎片不足，需要 ${r.cost}` : '兑换失败', 'warn')
    return
  }
  save(true)
  confirmCard.value = null
  toast(`已兑换「${c.name}」，消耗 ${r.cost} 碎片`, 'info')
}

function costOf(card) {
  return GACHA.exchange[card.rarity] || 0
}
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">COLLECTION</div>
        <h1 class="page-title">知识卡册</h1>
        <div class="head-stats">
          <span><b>{{ collected }}</b>/{{ cards.length }} 张</span>
          <span><b>{{ shards }}</b> 碎片</span>
        </div>
      </div>
      <div style="flex: 1" />
      <button class="btn btn-ghost btn-sm" @click="showHistory = true">抽卡记录</button>
    </div>

    <section class="gacha-hero card">
      <div class="gh-left">
        <div class="gh-balance">
          <span class="coin-orb"><AppIcon name="coin" :size="15" /></span>
          <b>{{ points }}</b>
          <span class="tiny dim">积分</span>
        </div>
        <div class="gh-chips">
          <span class="chip"><AppIcon name="cards" :size="12" /> {{ collected }}/{{ cards.length }}</span>
          <span class="chip lilac"><AppIcon name="sparkle" :size="12" /> {{ shards }}</span>
        </div>
        <div class="pity-mini" :title="pityLeft ? 'SSR 保底还差 ' + pityLeft + ' 抽' : '下一抽必出 SSR'">
          <span class="tiny dim">SSR</span>
          <div class="bar thin"><i :style="{ width: (pitySsr / GACHA.pitySsr * 100) + '%', background: 'var(--lilac)' }" /></div>
          <b class="mono tiny">{{ pityLeft ? pityLeft + ' 抽' : '必出' }}</b>
        </div>
      </div>

      <div class="gh-visual" aria-hidden="true">
        <div class="deck">
          <div class="deck-card d1" />
          <div class="deck-card d2" />
          <div class="deck-card d3"><AppIcon name="sparkle" :size="18" /></div>
        </div>
      </div>

      <div class="gh-actions">
        <button class="btn btn-primary pull-btn" :disabled="busy" @click="doPull(1)">
          <span>单抽</span><span class="mono tiny">{{ GACHA.singleCost }}</span>
        </button>
        <button class="btn btn-ghost pull-btn ten" :disabled="busy" @click="doPull(10)">
          <span>十连</span><span class="mono tiny">{{ GACHA.tenCost }}</span>
        </button>
      </div>

      <div class="rate-line">
        <span v-for="r in ['SSR', 'SR', 'R', 'N']" :key="r">
          <i :class="'dot-' + r.toLowerCase()" />{{ r }} {{ Math.round(GACHA.rates[r] * 1000) / 10 }}%
        </span>
      </div>
    </section>

    <section class="stamps">
      <div v-for="s in stamps" :key="s.subject.id" class="stamp" :class="{ done: s.done }">
        <div class="stamp-ring" :style="{ '--sub': `var(--sub-${s.subject.id})` }">
          <span v-if="s.done">章</span>
          <span v-else class="mono">{{ s.got }}/{{ s.total }}</span>
        </div>
        <div class="tiny">{{ s.subject.short }}章</div>
      </div>
    </section>

    <div class="row gacha-filter" style="margin: 18px 0 12px">
      <div class="pill-tabs">
        <button
          v-for="s in subjects" :key="s.id"
          class="chip clickable" :class="{ active: tab === s.id }"
          @click="tab = s.id"
        >{{ s.short }} <span class="mono tiny">{{ (cardsBySubject[s.id] || []).filter(c => owned[c.id]).length }}/{{ (cardsBySubject[s.id] || []).length }}</span></button>
      </div>
      <div style="flex: 1" />
      <label class="row tiny dim" style="gap: 6px; cursor: pointer">
        <input v-model="onlyOwned" type="checkbox" /> 只看已收集
      </label>
    </div>

    <div class="card-grid">
      <div v-for="c in pool" :key="c.id" class="cell-wrap" @click="tryExchange(c)">
        <CardFace :card="c" :owned="!!owned[c.id]" :count="owned[c.id]?.count || 0" small />
        <div v-if="!owned[c.id] && (c.rarity === 'N' || c.rarity === 'R')" class="ex-tag mono tiny">
          碎片 {{ costOf(c) }}
        </div>
      </div>
    </div>

    <ModalDialog :open="!!reveal" title="抽取结果" width="720" @close="closeReveal">
      <div :key="revealKey" class="reveal-grid" :class="{ ten: revealCards.length > 1 }">
        <div
          v-for="(r, i) in revealCards" :key="i"
          class="reveal-item" :style="{ animationDelay: (i * 60) + 'ms' }"
        >
          <CardFace :card="r.card" owned :count="archive.cards.owned[r.card.id]?.count || 0" :small="revealCards.length > 1" />
          <div class="tiny" style="margin-top: 6px; text-align: center">
            <span class="rail" :class="r.rarity.toLowerCase()">{{ r.rarity }}</span>
            <span v-if="r.dup" class="dim"> ×{{ archive.cards.owned[r.card.id]?.count }} · +{{ r.shards }} 碎片</span>
            <span v-else style="color: var(--mint)"> 新</span>
          </div>
        </div>
      </div>
      <div class="tiny dim" style="margin-top: 14px">消耗 {{ reveal?.cost }} 积分，SSR 保底进度 {{ reveal?.pitySsr }} / {{ GACHA.pitySsr }}</div>
      <template #footer>
        <button class="btn btn-ghost" @click="closeReveal(); doPull(10)">再来十连</button>
        <button class="btn btn-primary" @click="closeReveal">收下</button>
      </template>
    </ModalDialog>

    <ModalDialog :open="!!confirmCard" title="碎片兑换" width="380" @close="confirmCard = null">
      <div v-if="confirmCard">
        <p class="small">用 <b class="mono">{{ costOf(confirmCard) }}</b> 碎片兑换「{{ confirmCard.name }}」？</p>
        <p class="tiny dim" style="margin-top: 8px">当前碎片 {{ shards }}，兑换后剩余 {{ shards - costOf(confirmCard) }}。</p>
      </div>
      <template #footer>
        <button class="btn btn-text" @click="confirmCard = null">取消</button>
        <button class="btn btn-primary" :disabled="shards < costOf(confirmCard)" @click="doExchange">确认兑换</button>
      </template>
    </ModalDialog>

    <ModalDialog :open="showHistory" title="抽卡记录" width="520" @close="showHistory = false">
      <div v-if="history.length" class="hist">
        <div v-for="(h, i) in history" :key="i" class="h-row">
          <span class="rail" :class="h.rarity.toLowerCase()">{{ h.rarity }}</span>
          <span style="flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">{{ cardById[h.cardId]?.name || h.cardId }}</span>
          <span class="tiny dim">{{ h.forcedSsr ? '保底' : h.forcedR ? '十连保底' : h.dup ? `+${h.shards} 碎片` : '新卡' }}</span>
          <span class="mono tiny dim">{{ relativeDay(h.at) }}</span>
        </div>
      </div>
      <EmptyState v-else icon="cards" title="还没有抽卡记录" text="做题攒积分，回来抽第一张。" />
    </ModalDialog>
  </div>
</template>

<style scoped>
.head-stats { display: flex; gap: 16px; margin-top: 4px; color: var(--text-3); font-size: 12px; }
.head-stats b { font-family: var(--font-mono); font-size: 15px; color: var(--text); font-weight: 500; }
.gacha-hero {
  display: grid; grid-template-columns: minmax(0, 1fr) 128px 210px; gap: 20px;
  padding: 20px 22px; align-items: center;
  background: radial-gradient(90% 140% at 80% 0%, color-mix(in srgb, var(--lilac) 10%, transparent), transparent 60%), var(--bg-1);
}
.gh-left { min-width: 0; }
.gh-balance { display: flex; align-items: baseline; gap: 7px; }
.gh-balance b { font-family: var(--font-display); font-size: 36px; line-height: 1; letter-spacing: 0.01em; }
.coin-orb { width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center; color: var(--amber); background: color-mix(in srgb, var(--amber) 12%, var(--bg-2)); align-self: center; }
.gh-chips { display: flex; gap: 6px; margin-top: 10px; }
.chip.lilac { color: var(--lilac); border-color: color-mix(in srgb, var(--lilac) 30%, var(--line)); }
.pity-mini { display: flex; align-items: center; gap: 8px; margin-top: 12px; max-width: 240px; }
.pity-mini .bar { flex: 1; }
.gh-visual { display: grid; place-items: center; }
.deck { position: relative; width: 108px; height: 100px; }
.deck-card { position: absolute; width: 54px; height: 72px; border-radius: 8px; border: 1px solid var(--line-strong); background: linear-gradient(150deg, var(--bg-2), var(--bg-1)); box-shadow: 0 8px 16px rgba(0,0,0,.18); }
.deck-card::before { content: ''; position: absolute; inset: 7px; border-radius: 4px; border: 1px solid color-mix(in srgb, var(--lilac) 26%, transparent); }
.d1 { left: 2px; top: 16px; transform: rotate(-12deg); }
.d2 { left: 27px; top: 8px; transform: rotate(1deg); }
.d3 { left: 52px; top: 14px; transform: rotate(12deg); display: grid; place-items: center; color: var(--lilac); border-color: color-mix(in srgb, var(--lilac) 50%, var(--line)); }
.d3::before { border-color: color-mix(in srgb, var(--amber) 45%, transparent); box-shadow: 0 0 14px color-mix(in srgb, var(--amber) 16%, transparent); }
.gh-actions { display: flex; flex-direction: column; gap: 8px; }
.pull-btn { display: flex; justify-content: space-between; align-items: center; gap: 14px; }
.pull-btn.ten { border-color: color-mix(in srgb, var(--amber) 35%, var(--line)); }
.rate-line { grid-column: 1 / -1; display: flex; gap: 14px; flex-wrap: wrap; padding-top: 4px; color: var(--text-3); font-size: 10.5px; font-family: var(--font-mono); }
.rate-line span { display: inline-flex; align-items: center; gap: 4px; }
.rate-line i { width: 5px; height: 5px; border-radius: 50%; background: var(--text-3); }
.rate-line .dot-ssr { background: var(--amber); }
.rate-line .dot-sr { background: var(--lilac); }
.rate-line .dot-r { background: var(--sky); }
.stamps { display: flex; gap: 14px; margin-top: 14px; flex-wrap: wrap; }
.stamp { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.stamp-ring { width: 52px; height: 52px; border-radius: 50%; border: 1px dashed var(--line-strong); display: grid; place-items: center; color: var(--text-3); font-size: 11px; }
.stamp.done .stamp-ring { border: 1px solid var(--sub); color: var(--sub); background: color-mix(in srgb, var(--sub) 8%, transparent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--sub) 10%, transparent); font-family: var(--font-display); font-size: 18px; }
.card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 14px; }
.cell-wrap { position: relative; cursor: pointer; }
.ex-tag { position: absolute; right: 8px; bottom: 8px; padding: 2px 6px; border-radius: 5px; background: color-mix(in srgb, var(--lilac) 20%, var(--bg-1)); border: 1px solid var(--line); color: var(--text-2); }
.reveal-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; }
.reveal-grid:not(.ten) { grid-template-columns: minmax(0, 220px); justify-content: center; }
.reveal-item { animation: pop .42s var(--ease) both; }
.reveal-item :deep(.cardface) { animation: flip .3s var(--ease) both; }
@keyframes pop { from { opacity: 0; transform: translateY(10px) scale(.96); } }
@keyframes flip { from { transform: rotateY(80deg); opacity: .4; } }
.hist { display: flex; flex-direction: column; max-height: 420px; overflow: auto; }
.h-row { display: flex; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px dashed var(--line); font-size: 12.5px; }
@media (max-width: 900px) {
  .gacha-hero { grid-template-columns: minmax(0, 1fr) 110px; gap: 12px 14px; padding: 16px; }
  .gh-actions { grid-column: 1 / -1; flex-direction: row; }
  .gh-actions .pull-btn { flex: 1; }
  .rate-line { gap: 10px; }
  .reveal-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (max-width: 900px) {
  .stamps { flex-wrap: nowrap; overflow-x: auto; gap: 8px; padding-bottom: 4px; scrollbar-width: none; }
  .stamps::-webkit-scrollbar { display: none; }
  .stamp { flex: 0 0 auto; }
  .gacha-filter { flex-wrap: nowrap; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none; }
  .gacha-filter::-webkit-scrollbar { display: none; }
  .gacha-filter > div[style*="flex: 1"], .gacha-filter label { display: none; }
  .gacha-filter .pill-tabs { flex-wrap: nowrap; }
}
@media (max-width: 480px) {
  .gh-balance b { font-size: 30px; }
  .gh-chips { margin-top: 7px; }
  .pity-mini { margin-top: 8px; }
  .deck { width: 88px; height: 86px; transform: scale(.9); }
  .stamps { gap: 10px; }
  .stamp-ring { width: 46px; height: 46px; }
  .card-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
  .head-stats { gap: 12px; }
}
</style>
