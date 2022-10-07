<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <Button type="button" @click="count++">
      {{ $t('helloWorld.count-is', { number: count }) }}
    </Button>
    <p v-html="$t('helloWorld.test-hmr')"></p>
  </div>

  <i18n-t keypath="helloWorld.check-out" tag="p">
    <template v-slot:action>
      <a
        href="https://vuejs.org/guide/quick-start.html#local"
        target="_blank"
        >{{ $t('helloWorld.create-vue') }}</a
      >
    </template>
  </i18n-t>

  <i18n-t keypath="helloWorld.install-to-ide" tag="p">
    <template v-slot:action>
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">{{
        $t('helloWorld.volar')
      }}</a>
    </template>
  </i18n-t>

  <p class="read-the-docs">{{ $t('helloWorld.read-the-docs') }}</p>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from 'ant-design-vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
