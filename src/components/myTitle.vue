<template>
  <div>
    {{ props.title }}-{{ props.counter }}-{{ counterLen }}
    <button @click="divClick()">divClick</button>
  </div>
</template>
<script setup>
import { defineProps, computed, onMounted, defineEmits } from "vue";
const props = defineProps({ title: String, counter: Number });
const counterLen = computed(() => props.counter * 2);
const emit = defineEmits(["save"]);
const divClick = () => {
  emit("save");
};
onMounted(() => {
  //alert("hello");
});
</script>