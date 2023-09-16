<script setup>
import { defineProps, defineEmits } from 'vue';

const { handleClick } = defineEmits(['click']);
</script>

<template>
   <button @click="handleClick">
    <slot></slot>
  </button>
</template>
