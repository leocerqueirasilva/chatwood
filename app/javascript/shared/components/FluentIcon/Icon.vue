<template>
  <svg
    v-if="iconLibrary === 'fluent'"
    :width="size"
    :height="size"
    fill="none"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-for="source in pathSource"
      :key="source"
      :d="source"
      fill="currentColor"
    />
  </svg>
  <svg
    v-else-if="icon === 'pm-chat'"
    :width="size"
    :height="size"
    fill="none"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-for="source in pathSource"
      :key="source"
      :d="source"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else
    :width="size"
    :height="size"
    fill="none"
    :viewBox="viewBox"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g v-for="(pathData, index) in pathSource" :key="index">
      <path
        :key="pathData"
        :d="pathData"
        stroke="currentColor"
        stroke-width="1.66667"
      />
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    icons: {
      type: Object,
      required: true,
    },
    size: {
      type: [String, Number],
      default: '20',
    },
    type: {
      type: String,
      default: 'outline',
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
    iconLib: {
      type: String,
      default: 'fluent',
    },
  },
  data() {
    return {
      pIcons: ['inbox', 'bulksend', 'chat', 'reports', 'helpcenter', 'pm-chat'],
    };
  },

  computed: {
    pathSource() {
      // To support icons with multiple paths
      const path = this.icons[`${this.icon}-${this.type}`];
      if (path.constructor === Array) {
        return path;
      }
      return [path];
    },
    iconLibrary() {
      if (this.pIcons.includes(this.icon)) {
        return 'custom';
      }
      return this.iconLib;
    },
  },
};
</script>
