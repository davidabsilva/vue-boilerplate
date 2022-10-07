<template>
  <div id="nav">
    <router-link to="/" class="font-bold">Home</router-link> |
    <router-link to="/router" class="font-bold">Vue-Router</router-link>
  </div>
  <router-view />
</template>

<script>
export default { name: "Vue boilerplate" };
</script>

<style>
#nav a {
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
