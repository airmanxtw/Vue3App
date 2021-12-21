<template>
  <div>
    <h1>hello vue3 {{ counter }}</h1>
    <button @click="add">click</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
const counter = ref(0);
let add = () => {
  counter.value++;
};
</script>
