<script setup lang="jsx">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "../components/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://router.vuejs.org/" target="_blank">
      <img src="/vue.svg" class="logo" alt="Vue-router logo" />
    </a>
  </div>
  <HelloWorld msg="Vue-router" />
</template>

<script lang="jsx">
export default { name: "router" };
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
}
.logo:hover {
  filter: drop-shadow(0 0 1.5em #42b883aa);
}
</style>
