<script setup>
import { computed } from 'vue'
import { knowledgeById, subjectMap } from '../data/index.js'
import { rarityMeta } from '../data/cards.js'

const props = defineProps({
  card: { type: Object, required: true },
  owned: { type: Boolean, default: false },
  count: { type: Number, default: 0 },
  small: Boolean
})

const subject = computed(() => subjectMap[props.card.subject])
const knowledge = computed(() => knowledgeById[props.card.knowledgeId])
const rarity = computed(() => rarityMeta[props.card.rarity] || {})
const accent = computed(() => `var(--sub-${props.card.subject})`)
</script>

<template>
  <div class="cardface" :class="[card.rarity.toLowerCase(), { small, locked: !owned }]" :style="{ '--accent': accent }">
    <div class="motif" :data-motif="card.motif" />
    <div class="glow" v-if="card.rarity === 'SSR'" />
    <div class="cf-top">
      <span class="mono cf-id">{{ subject?.short }} · {{ card.id.slice(-2) }}</span>
      <span class="rail" :class="card.rarity.toLowerCase()">{{ card.rarity }}</span>
    </div>
    <div class="cf-mid">
      <div class="cf-name">{{ owned ? card.name : '未获得' }}</div>
      <div class="cf-line">{{ owned ? card.line : '在卡池中可抽取' }}</div>
    </div>
    <div class="cf-bottom">
      <span class="cf-kn">{{ owned ? knowledge?.title : '???' }}</span>
      <span v-if="count > 1" class="cf-count mono">×{{ count }}</span>
    </div>
  </div>
</template>

<style scoped>
.cardface {
  aspect-ratio: 3 / 4;
  border-radius: 12px;
  border: 1px solid var(--line-strong);
  background: linear-gradient(160deg, var(--bg-2), var(--bg-1) 60%);
  position: relative;
  overflow: hidden;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 6px 16px rgba(0,0,0,0.18);
  isolation: isolate;
}
.cardface.small { padding: 8px; border-radius: 10px; }
.cardface.r { border-color: color-mix(in srgb, var(--sky) 40%, transparent); }
.cardface.sr { border-color: color-mix(in srgb, var(--lilac) 50%, transparent); }
.cardface.ssr { border-color: color-mix(in srgb, var(--amber) 60%, transparent); }
.cardface.locked { filter: saturate(0.25); opacity: 0.62; }

.motif {
  position: absolute; inset: 0; opacity: 0.5; z-index: -1;
  background-image:
    radial-gradient(circle at 78% 18%, color-mix(in srgb, var(--accent) 26%, transparent), transparent 55%),
    repeating-linear-gradient(45deg, color-mix(in srgb, var(--accent) 6%, transparent) 0 1px, transparent 1px 9px);
}
.motif[data-motif='grid'] { background-image: linear-gradient(color-mix(in srgb, var(--accent) 10%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--accent) 10%, transparent) 1px, transparent 1px), radial-gradient(circle at 30% 80%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 60%); background-size: 12px 12px, 12px 12px, auto; }
.motif[data-motif='orbit'] { background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0 12px, color-mix(in srgb, var(--accent) 12%, transparent) 12px 13px), radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--accent) 25%, transparent), transparent 65%); }
.motif[data-motif='wave'] { background-image: repeating-linear-gradient(-20deg, color-mix(in srgb, var(--accent) 9%, transparent) 0 2px, transparent 2px 14px), radial-gradient(circle at 20% 30%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 60%); }
.motif[data-motif='circuit'] { background-image: radial-gradient(color-mix(in srgb, var(--accent) 18%, transparent) 1px, transparent 1.5px), repeating-linear-gradient(90deg, color-mix(in srgb, var(--accent) 7%, transparent) 0 1px, transparent 1px 20px); background-size: 16px 16px, auto; }
.motif[data-motif='lattice'] { background-image: repeating-linear-gradient(60deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 12px), repeating-linear-gradient(-60deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 12px); }
.motif[data-motif='stack'] { background-image: repeating-linear-gradient(0deg, transparent 0 10px, color-mix(in srgb, var(--accent) 12%, transparent) 10px 12px), radial-gradient(circle at 80% 85%, color-mix(in srgb, var(--accent) 20%, transparent), transparent 55%); }
.motif[data-motif='prism'] { background-image: conic-gradient(from 210deg at 70% 25%, transparent, color-mix(in srgb, var(--accent) 18%, transparent), transparent 55%); }
.motif[data-motif='tower'] { background-image: linear-gradient(180deg, color-mix(in srgb, var(--accent) 18%, transparent), transparent 40%), repeating-linear-gradient(90deg, transparent 0 14px, color-mix(in srgb, var(--accent) 8%, transparent) 14px 15px); }
.motif[data-motif='halo'] { background-image: radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--accent) 34%, transparent), transparent 62%), radial-gradient(circle at 50% 42%, transparent 0 34%, color-mix(in srgb, var(--accent) 12%, transparent) 35% 36%, transparent 37%); }
.motif[data-motif='branch'] { background-image: repeating-linear-gradient(120deg, color-mix(in srgb, var(--accent) 8%, transparent) 0 1px, transparent 1px 16px); }
.motif[data-motif='graph'] { background-image: radial-gradient(color-mix(in srgb, var(--accent) 20%, transparent) 1.5px, transparent 2px); background-size: 22px 22px; }

.glow { position: absolute; inset: -40%; background: conic-gradient(from 0deg, transparent 0 60%, color-mix(in srgb, var(--amber) 30%, transparent) 72%, transparent 82%); animation: sweep 6s linear infinite; z-index: -1; }
@keyframes sweep { to { transform: rotate(360deg); } }

.cf-top { display: flex; justify-content: space-between; align-items: center; }
.cf-id { font-size: 9.5px; letter-spacing: 0.08em; color: var(--text-3); }
.rail { font-family: var(--font-mono); font-size: 9.5px; padding: 1px 5px; border-radius: 4px; border: 1px solid var(--line-strong); color: var(--text-2); }
.rail.r { color: var(--sky); border-color: color-mix(in srgb, var(--sky) 45%, transparent); }
.rail.sr { color: var(--lilac); border-color: color-mix(in srgb, var(--lilac) 45%, transparent); }
.rail.ssr { color: var(--amber); border-color: color-mix(in srgb, var(--amber) 55%, transparent); }
.cf-mid { margin-top: auto; margin-bottom: auto; }
.cf-name { font-size: 19px; font-weight: 600; letter-spacing: 0.02em; margin-bottom: 6px; text-shadow: 0 2px 8px rgba(0,0,0,0.3); }
.cardface.small .cf-name { font-size: 14px; margin-bottom: 3px; }
.cf-line { font-size: 11px; line-height: 1.6; color: var(--text-2); }
.cardface.small .cf-line { font-size: 9.5px; }
.cf-bottom { display: flex; justify-content: space-between; align-items: flex-end; gap: 6px; border-top: 1px solid var(--line); padding-top: 7px; }
.cf-kn { font-size: 10px; color: var(--text-3); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.cf-count { font-size: 10px; color: var(--amber); }
</style>
