<script setup>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 18 },
  stroke: { type: Number, default: 1.6 }
})

const icons = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
  book: '<path d="M4 4.5A2 2 0 0 1 6 3h5v17H6a2 2 0 0 0-2 2z"/><path d="M20 4.5A2 2 0 0 0 18 3h-5v17h5a2 2 0 0 1 2 2z"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>',
  pencil: '<path d="M4 20h4l11-11-4-4-11 11z"/><path d="m14 5 4 4"/>',
  alert: '<path d="M12 3 2.5 20h19z"/><path d="M12 9v5"/><circle cx="12" cy="17.2" r="0.9"/>',
  cards: '<rect x="3" y="6" width="12" height="15" rx="2"/><rect x="8" y="3" width="13" height="15" rx="2"/>',
  tasks: '<path d="M5 4h14v16H5z"/><path d="M8 9l1.5 1.5L12 8"/><path d="M14 9.5h3"/><path d="M8 15l1.5 1.5L12 14"/><path d="M14 15.5h3"/>',
  chart: '<path d="M4 20V4"/><path d="M4 20h16"/><path d="M8 16v-5"/><path d="M12 16v-8"/><path d="M16 16v-3"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1"/>',
  flame: '<path d="M12 21c4 0 7-2.7 7-6.5 0-3-2-4.6-4-6.5-.6 2.2-2 3-3 5.5 1-.8 1.6-2 1.6-3.5 0-2-1.6-3.5-3.2-4.5.4 2.8-1.4 4.2-1.4 6.5 0 4.4 3 8 7 8z"/>',
  coin: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9"/><path d="M9.5 9.8h4a2 2 0 0 1 0 4h-4"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.5l3.5 2"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  'arrow-right': '<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>',
  'arrow-left': '<path d="M20 12H5"/><path d="m11 6-6 6 6 6"/>',
  'chevron-left': '<path d="m14 6-6 6 6 6"/>',
  'chevron-right': '<path d="m10 6 6 6-6 6"/>',
  'chevron-down': '<path d="m6 10 6 6 6-6"/>',
  sparkle: '<path d="M12 3l2.2 6.3L21 11.5l-6.8 2.2L12 20l-2.2-6.3L3 11.5l6.8-2.2z"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
  repeat: '<path d="M4 9a5 5 0 0 1 5-5h9"/><path d="m15 1.5 3.5 2.5L15 6.5"/><path d="M20 15a5 5 0 0 1-5 5H6"/><path d="m9 22.5-3.5-2.5L9 17.5"/>',
  crown: '<path d="M3 8l4.5 4L12 4l4.5 8L21 8l-2 11H5z"/>',
  stamp: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2"/>',
  download: '<path d="M12 3v11"/><path d="m7.5 10 4.5 4.5L16.5 10"/><path d="M4 18.5v2h16v-2"/>',
  upload: '<path d="M12 15V4"/><path d="m7.5 8 4.5-4.5L16.5 8"/><path d="M4 18.5v2h16v-2"/>',
  trash: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
  refresh: '<path d="M20 12a8 8 0 1 1-2.4-5.7"/><path d="M20 4v4h-4"/>',
  sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5v2.5M2 12h2.5M19.5 12h2.5M5 5l1.8 1.8M17.2 17.2 1.8 1.8M19 5l-1.8 1.8M6.8 17.2 5-1.8"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 10.5 20 8.6 8.6 0 0 0 9.5-5.5z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5"/><circle cx="12" cy="8" r="0.9"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  flag: '<path d="M5 21V4"/><path d="M5 4h11l-2 4 2 4H5"/>',
  play: '<path d="M7 4.5 19 12 7 19.5z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  star: '<path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1 6.2-5.6-3-5.6 3 1-6.2L7 8.7l6.2-.9z"/>',
  bolt: '<path d="M13 2 5 13h6l-1 9 8-11h-6z"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8.5 10V7a3.5 3.5 0 0 1 7 0v3"/>',
  filter: '<path d="M4 5h16l-6 7v7l-4 2v-9z"/>',
  bookopen: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 0 4 21.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5A1.5 1.5 0 0 1 1.5 1.5z"/>',
  trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0z"/><path d="M8 5H5v1a3 3 0 0 0 3 3"/><path d="M16 5h3v1a3 3 0 0 0-3 3"/><path d="M12 12v4"/><path d="M8 20h8"/><path d="M9 20c0-2 1-3 3-3s3 1 3 3"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m4 18 5-5 4 4 3-3 4 4"/>'
}
</script>

<template>
  <svg
    :width="size" :height="size" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" :stroke-width="stroke"
    stroke-linecap="round" stroke-linejoin="round"
    v-html="icons[name] || icons.info"
  />
</template>
