<script setup lang="jsx">
import { Button } from "ant-design-vue";
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <Button type="button" @click="increment">
      {{ $t("helloWorld.count-is", { number: count }) }}
    </Button>
  </div>

  <i18n-t keypath="helloWorld.install-to-ide" tag="p" scope="global">
    <template v-slot:action>
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">{{
        $t("helloWorld.volar")
      }}</a>
    </template>
  </i18n-t>

  <p class="read-the-docs">{{ $t("helloWorld.read-the-docs") }}</p>
</template>

<script lang="jsx">
import { mapState } from "vuex";

export default {
  name: "counter",
  props: {
    msg: String,
  },
  computed: mapState({
    count: (state) => state.counter.count,
  }),
  methods: {
    increment: function () {
      this.$store.commit("counter/incrementCounter");
    },
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
