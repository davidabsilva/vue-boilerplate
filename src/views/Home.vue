<script setup lang="jsx">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Counter from "../components/Counter.vue";
</script>

<template>
  <div>
    <a v-for="link in links" target="_blank" :href="link.link">
      <img
        :src="link.logo"
        :class="`logo ${link.class}`"
        :alt="`${link.alt} logo`"
      />
    </a>
  </div>
  <Counter msg="Vite + Vue + Vue-i18n + Vuex + AntD" />
</template>

<script lang="jsx">
export default {
  name: "home",
  data() {
    return {
      links: [
        {
          link: "https://vitejs.dev",
          logo: "/vite.svg",
          alt: "Vite",
          class: "",
        },
        {
          link: "https://vuejs.org/",
          logo: "/vue.svg",
          alt: "Vue",
          class: "vue",
        },
        {
          link: "https://kazupon.github.io/vue-i18n/",
          logo: "/vue-i18n.svg",
          alt: "Vue i18n",
          class: "i18n",
        },
        {
          link: "https://v3.vuex.vuejs.org/",
          logo: "/vue.svg",
          alt: "Vuex",
          class: "vuex",
        },
        {
          link: "https://antdv.com/docs/vue/introduce",
          logo: "/antd-vue.svg",
          alt: "Ant design vue",
          class: "antd",
        },
      ],
    };
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
}
.logo:hover {
  filter: drop-shadow(0 0 1.5em #646cff);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 1.5em #42b883);
}
.logo.antd:hover {
  filter: drop-shadow(0 0 1.5em #1890ff);
}
.logo.i18n:hover {
  filter: drop-shadow(0 0 1.5em #42b883);
}
.logo.vuex:hover {
  filter: drop-shadow(0 0 1.5em #42b883);
}
</style>
