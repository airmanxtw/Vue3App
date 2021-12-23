<template>
  <div>
    <h1>hello vue3 {{ counter }}</h1>
    <button @click="add">click</button>
    <my-title title="test title" :counter="counter" @save="add()"></my-title>
  </div>
</template>
<script setup>
import { ref } from "vue";
import myTitle from "./myTitle.vue";
const counter = ref(0);
let add = () => {
  counter.value+=2;
};
let add2=() =>{
  counter.value+=3;
  //test 
}
</script>
