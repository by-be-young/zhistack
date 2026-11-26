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
        <p class="page-sub">每张卡对应一个考点，抽到即点亮。重复卡自动转碎片，N/R 卡可用碎片补齐。</p>
      </div>
      <div style="flex: 1" />
      <button class="btn btn-ghost btn-sm" @click="showHistory = true">抽卡记录</button>
    </div>

    <section class="gacha-hero card">
      <div class="gh-left">
        <div class="mono tiny dim">BALANCE</div>
        <div class="bal"><b>{{ points }}</b><span class="tiny dim">积分</span></div>
        <div class="tiny dim">碎片 <b class="mono" style="color: var(--lilac)">{{ shards }}</b> · 已收集 {{ collected }} / {{ cards.length }}</div>
        <div class="pity">
          <div class="tiny dim">SSR 保底 {{ pityLeft ? `还差 ${pityLeft} 抽` : '下一抽必出' }}</div>
          <div class="bar thin"><i :style="{ width: (pitySsr / GACHA.pitySsr * 100) + '%', background: 'var(--lilac)' }" /></div>
          <div class="tiny dim" style="margin-top: 6px">十连第 10 抽若全 N，自动提升为 R</div>
        </div>
      </div>
      <div class="gh-mid">
        <div class="rates">
          <div v-for="r in ['SSR', 'SR', 'R', 'N']" :key="r" class="rate">
            <span class="rail" :class="r.toLowerCase()">{{ r }}</span>
            <span class="mono tiny">{{ Math.round(GACHA.rates[r] * 1000) / 10 }}%</span>
          </div>
        </div>
        <div class="tiny dim">概率按单抽计，保底独立累计</div>
      </div>
      <div class="gh-actions">
        <button class="btn btn-primary" :disabled="busy" @click="doPull(1)">
          单抽 <span class="mono tiny">{{ GACHA.singleCost }}</span>
        </button>
        <button class="btn btn-ghost" :disabled="busy" @click="doPull(10)">
          十连 <span class="mono tiny">{{ GACHA.tenCost }}</span>
          <span class="tiny" style="color: var(--amber)">省 {{ GACHA.singleCost * 10 - GACHA.tenCost }}</span>
        </button>
        <router-link to="/practice" class="btn btn-text btn-sm">去赚积分 →</router-link>
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

    <div class="row" style="margin: 18px 0 12px">
      <div class="pill-tabs">
        <button
          v-for="s in subjects" :key="s.id"
          class="chip clickable" :class="{ active: tab === s.id }"
          @click="tab = s.id"
        >{{ s.name }} <span class="mono tiny">{{ (cardsBySubject[s.id] || []).filter(c => owned[c.id]).length }}/{{ (cardsBySubject[s.id] || []).length }}</span></button>
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
.gacha-hero { display: grid; grid-template-columns: 1.1fr 1fr auto; gap: 24px; padding: 22px 26px; align-items: center; background: radial-gradient(120% 140% at 100% 0%, color-mix(in srgb, var(--lilac) 8%, transparent), transparent 60%), var(--bg-1); }
.bal { display: flex; align-items: baseline; gap: 6px; margin: 4px 0 6px; }
.bal b { font-size: 34px; font-variant-numeric: tabular-nums; }
.pity { margin-top: 12px; max-width: 260px; }
.rates { display: flex; gap: 14px; margin-bottom: 8px; }
.rate { display: flex; align-items: center; gap: 6px; }
.gh-actions { display: flex; flex-direction: column; gap: 8px; align-items: stretch; }
.stamps { display: flex; gap: 14px; margin-top: 16px; }
.stamp { display: flex; flex-direction: column; align-items: center; gap: 6px; }
.stamp-ring { width: 54px; height: 54px; border-radius: 50%; border: 1px dashed var(--line-strong); display: grid; place-items: center; color: var(--text-3); font-size: 11px; }
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
  .gacha-hero { grid-template-columns: minmax(0, 1fr); gap: 16px; }
  .reveal-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
</style>
