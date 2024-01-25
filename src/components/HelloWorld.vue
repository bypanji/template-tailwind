<script setup lang="ts">
import { conterStore } from '../stores/counter'
import { storeToRefs } from 'pinia';
import BreadcrumpItem from './BreadcrumpItem.vue';

defineProps<{ msg: string }>()

const globalCounter = conterStore()
const { counter }   = storeToRefs(globalCounter)

</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <BaseBreadcrump />
    <h1>{{ msg }}</h1>
    <div class="flex m-4">
      <BaseButton size="md" color="warning" @click="globalCounter.addSum()">count +</BaseButton>
      <BaseButton size="lg" color="success">count is {{ counter }}</BaseButton>
      <BaseButton size="md" color="info" @click="globalCounter.minSum">count -</BaseButton>
    </div>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <div class="flex flex-col items-center justify-center">
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style lang="postcss" scoped>
/* .read-the-docs {
  @apply  text-gray-400;
} */
.button {
  @apply  px-3  py-2  border-2  rounded-lg  mx-2;
}
</style>
