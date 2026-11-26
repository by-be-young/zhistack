<script setup>
import { computed, onMounted, ref } from 'vue'
import { archive, exportJSON, importArchive, inspectImport, applyImport, backupList, restoreBackup, resetArchive, usage, save } from '../storage/archive.js'
import { subjects, subjectMap, books, dataVersion } from '../data/index.js'
import { useApp } from '../stores/app.js'
import { dayKey } from '../core/time.js'
import { toast } from '../core/toast.js'
import ModalDialog from '../components/ModalDialog.vue'
import AppIcon from '../components/AppIcon.vue'

const appVersion = '1.0.0'

const app = useApp()
const theme = computed(() => archive.settings.theme || 'dark')
const partial = computed({
  get: () => archive.settings.partialCredit !== false,
  set: v => { archive.settings.partialCredit = v; save(true) }
})
const subjectsSel = computed(() => archive.settings.subjects)

const bytes = computed(() => usage())
const backups = ref([])
const pending = ref(null)
const showReset = ref(false)
const resetWord = ref('')
const fileInput = ref(null)
const importing = ref(false)

const themes = [
  { id: 'dark', name: '深色', desc: '默认，低亮度环境更稳' },
  { id: 'light', name: '浅色', desc: '白纸感，适合白天' },
  { id: 'system', name: '跟随系统', desc: '按系统外观自动切换' }
]

function setTheme(id) { app.setTheme(id) }

function diffOffset(bookId) {
  const v = archive.settings.pdfOffset[bookId] || 0
  app.setOffset(bookId, v)
  toast('页码偏移已保存', 'info')
}

function download() {
  const blob = new Blob([exportJSON()], { type: 'application/json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = `知栈-408-备份-${dayKey()}.json`
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 1000)
  toast('已导出 JSON 备份', 'info')
}

function onFile(e) {
  const f = e.target.files?.[0]
  if (!f) return
  const reader = new FileReader()
  reader.onload = () => {
    try {
      const info = inspectImport(String(reader.result))
      pending.value = info
    } catch (err) {
      const map = { E_PARSE: '文件不是合法 JSON', E_IMPORT_INVALID: '缺少必要字段，不是本应用的备份', E_VERSION_NEW: '备份来自更高版本，请升级后再导入' }
      toast(map[err.message] || '无法识别该文件', 'error')
    }
  }
  reader.readAsText(f)
  e.target.value = ''
}

function confirmImport() {
  if (!pending.value) return
  if (!pending.value.checksumOk) { toast('校验和不匹配，文件可能被修改', 'error'); return }
  importing.value = true
  applyImport(pending.value.payload)
  importing.value = false
  pending.value = null
  toast('导入完成，页面数据已刷新', 'info')
  refreshBackups()
}

function refreshBackups() { backups.value = backupList() }

function doRestore(b) {
  const r = restoreBackup(b.index)
  if (!r.ok) { toast('备份不可用', 'error'); return }
  toast(`已恢复到 ${b.at ? b.at.slice(0, 16).replace('T', ' ') : '备份点'}`, 'info')
  refreshBackups()
}

function doReset() {
  if (resetWord.value !== '重置') return
  resetArchive({ keepSettings: true })
  showReset.value = false
  resetWord.value = ''
  toast('学习数据已清空，设置保留', 'info')
  refreshBackups()
}

function fmtBytes(n) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(2)} MB`
}

onMounted(() => {
  app.applyTheme(theme.value)
  refreshBackups()
})
</script>

<template>
  <div class="page">
    <div class="page-head">
      <div>
        <div class="eyebrow">SETTINGS</div>
        <h1 class="page-title">设置</h1>
        <p class="page-sub">所有偏好与进度都保存在本机浏览器，不上传服务器。建议定期导出备份。</p>
      </div>
    </div>

    <div class="stack" style="max-width: 880px">
      <section class="card card-pad">
        <div class="card-label">APPEARANCE</div>
        <h2 class="set-h">外观</h2>
        <div class="theme-grid">
          <button
            v-for="t in themes" :key="t.id"
            class="theme-card" :class="{ active: theme === t.id }"
            @click="setTheme(t.id)"
          >
            <div class="preview" :data-theme="t.id === 'system' ? undefined : t.id">
              <span class="pv-1" /><span class="pv-2" /><span class="pv-3" />
            </div>
            <div class="tiny" style="font-weight: 600">{{ t.name }}</div>
            <div class="tiny dim">{{ t.desc }}</div>
          </button>
        </div>
      </section>

      <section class="card card-pad">
        <div class="card-label">PRACTICE</div>
        <h2 class="set-h">练习偏好</h2>
        <div class="set-row">
          <div>
            <div class="tiny" style="font-weight: 600">默认科目</div>
            <div class="tiny dim">组卷时默认勾选的科目，至少保留一科</div>
          </div>
          <div class="row">
            <button
              v-for="s in subjects" :key="s.id"
              class="chip clickable" :class="{ active: subjectsSel.includes(s.id) }"
              @click="app.toggleSubject(s.id)"
            >{{ s.short }}</button>
          </div>
        </div>
        <div class="set-row">
          <div>
            <div class="tiny" style="font-weight: 600">多选题漏选给半分</div>
            <div class="tiny dim">关闭后多选必须全部选对才得分</div>
          </div>
          <button class="switch" :class="{ on: partial }" role="switch" :aria-checked="partial" @click="partial = !partial"><i /></button>
        </div>
        <div class="set-row">
          <div>
            <div class="tiny" style="font-weight: 600">重置引导</div>
            <div class="tiny dim">下次回到总览时再次显示三步提示</div>
          </div>
          <button class="btn btn-ghost btn-sm" @click="archive.settings.guideDone = false; save(true); toast('已重置引导', 'info')">重置</button>
        </div>
      </section>

      <section class="card card-pad">
        <div class="card-label">PDF OFFSET</div>
        <h2 class="set-h">书页页码偏移</h2>
        <p class="tiny dim" style="margin-bottom: 8px">若 PDF 的物理页比印刷页多出封面、目录等页数，填入偏移量：物理页 = 印刷页 + 偏移。</p>
        <table class="table">
          <thead><tr><th>书目</th><th>科目</th><th style="width: 140px">偏移</th><th style="width: 90px" /></tr></thead>
          <tbody>
            <tr v-for="b in books" :key="b.id">
              <td>{{ b.title }}</td>
              <td><span class="chip sub-chip" :style="{ '--sub': `var(--sub-${b.subject})` }"><span class="dot" />{{ subjectMap[b.subject]?.short }}</span></td>
              <td><input v-model.number="archive.settings.pdfOffset[b.id]" class="input" type="number" style="height: 32px" /></td>
              <td><button class="btn btn-text btn-sm" @click="diffOffset(b.id)">保存</button></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="card card-pad">
        <div class="card-label">DATA</div>
        <h2 class="set-h">数据与备份</h2>
        <div class="usage">
          <div class="spread tiny"><span>存档占用</span><span class="mono">{{ fmtBytes(bytes.bytes) }} / {{ fmtBytes(bytes.quota) }}</span></div>
          <div class="bar thin" style="margin-top: 6px"><i :style="{ width: (bytes.ratio * 100) + '%' }" /></div>
        </div>
        <div class="row" style="margin: 14px 0; flex-wrap: wrap">
          <button class="btn btn-ghost btn-sm" @click="download"><AppIcon name="download" :size="14" /> 导出 JSON</button>
          <button class="btn btn-ghost btn-sm" @click="fileInput?.click()"><AppIcon name="upload" :size="14" /> 导入备份</button>
          <button class="btn btn-text btn-sm" style="color: var(--rose)" @click="showReset = true">清空学习数据</button>
        </div>

        <div class="backup-list">
          <div v-for="b in backups" :key="b.index" class="bk-row">
            <span class="mono tiny dim">#{{ b.index + 1 }}</span>
            <span class="tiny" style="flex: 1">{{ b.at ? b.at.slice(0, 16).replace('T', ' ') : '空' }}</span>
            <span class="tiny dim">{{ b.answered }} 题 · {{ b.points }} 积分</span>
            <button class="btn btn-text btn-sm" @click="doRestore(b)">恢复</button>
          </div>
          <div v-if="!backups.length" class="tiny dim" style="padding: 10px 0">还没有自动备份，首次改动后生成。</div>
        </div>
      </section>

      <section class="card card-pad">
        <div class="card-label">ABOUT</div>
        <h2 class="set-h">关于</h2>
        <div class="about">
          <div><span class="dim tiny">应用版本</span><span class="mono tiny">{{ appVersion }}</span></div>
          <div><span class="dim tiny">数据版本</span><span class="mono tiny">{{ dataVersion }}</span></div>
          <div><span class="dim tiny">存档结构</span><span class="mono tiny">v{{ archive.schemaVersion }}</span></div>
          <div><span class="dim tiny">题库规模</span><span class="tiny">4 科 · 93 知识点 · 104 题 · 48 卡</span></div>
        </div>
        <p class="tiny dim" style="margin-top: 14px; line-height: 1.8">
          本项目为非商业学习工具，题目与知识点均为原创整理，教材正文版权归原作者与出版社所有。
          源码与文档托管在 GitHub，欢迎提交 Issue 反馈题目错误。
        </p>
      </section>
    </div>

    <input ref="fileInput" type="file" accept="application/json,.json" style="display: none" @change="onFile" />

    <ModalDialog :open="!!pending" title="导入备份" width="440" @close="pending = null">
      <div v-if="pending" class="tiny" style="line-height: 2">
        <div>来自版本 v{{ pending.version }}，校验 {{ pending.checksumOk ? '通过' : '失败' }}</div>
        <div>积分 {{ pending.summary.points }} · 累计 {{ pending.summary.answered }} 题 · {{ pending.summary.sessions }} 套</div>
        <div>卡片 {{ pending.summary.cards }} 张 · 错题 {{ pending.summary.mistakes }} 条</div>
        <div class="dim" style="margin-top: 8px">导入会覆盖当前存档，建议先导出当前数据。</div>
      </div>
      <template #footer>
        <button class="btn btn-text" @click="pending = null">取消</button>
        <button class="btn btn-primary" :disabled="importing" @click="confirmImport">覆盖并导入</button>
      </template>
    </ModalDialog>

    <ModalDialog :open="showReset" title="清空学习数据" width="420" @close="showReset = false">
      <p class="small">这会删除练习记录、错题、积分、卡片与任务进度，设置与书目偏移保留。</p>
      <p class="tiny dim" style="margin-top: 8px">输入「重置」以确认。</p>
      <input v-model="resetWord" class="input" style="margin-top: 8px" placeholder="重置" />
      <template #footer>
        <button class="btn btn-text" @click="showReset = false">取消</button>
        <button class="btn btn-primary" :disabled="resetWord !== '重置'" @click="doReset">确认清空</button>
      </template>
    </ModalDialog>
  </div>
</template>

<style scoped>
.stack { display: flex; flex-direction: column; gap: 14px; }
.set-h { font-size: 18px; margin: 4px 0 14px; }
.theme-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.theme-card { text-align: left; padding: 12px; border: 1px solid var(--line); border-radius: 10px; background: var(--bg-2); cursor: pointer; display: flex; flex-direction: column; gap: 3px; }
.theme-card.active { border-color: var(--mint); }
.preview { height: 54px; border-radius: 7px; border: 1px solid var(--line); margin-bottom: 8px; background: #12141a; display: flex; gap: 4px; padding: 8px; }
.preview[data-theme="light"] { background: #f4f1ea; }
.pv-1 { width: 30%; border-radius: 4px; background: rgba(127,127,127,.25); }
.pv-2 { flex: 1; border-radius: 4px; background: rgba(127,127,127,.12); }
.pv-3 { width: 10px; border-radius: 4px; background: rgba(127,127,127,.2); }
.set-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 0; border-top: 1px dashed var(--line); }
.set-row:first-of-type { border-top: 0; }
.switch { width: 42px; height: 24px; border-radius: 12px; background: var(--bg-3); border: 1px solid var(--line-strong); position: relative; cursor: pointer; }
.switch i { position: absolute; top: 2px; left: 2px; width: 18px; height: 18px; border-radius: 50%; background: var(--text-2); transition: .2s var(--ease); }
.switch.on { background: color-mix(in srgb, var(--mint) 22%, transparent); border-color: var(--mint); }
.switch.on i { left: 20px; background: var(--mint); }
.usage { padding: 4px 0 6px; }
.backup-list { border-top: 1px dashed var(--line); padding-top: 6px; }
.bk-row { display: flex; align-items: center; gap: 12px; padding: 6px 0; font-size: 12.5px; }
.about { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 24px; }
.about > div { display: flex; justify-content: space-between; border-bottom: 1px dashed var(--line); padding: 4px 0; }
@media (max-width: 760px) { .theme-grid { grid-template-columns: minmax(0, 1fr); } .about { grid-template-columns: minmax(0, 1fr); } }
</style>
