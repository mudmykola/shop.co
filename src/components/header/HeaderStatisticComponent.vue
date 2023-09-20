<template>
  <div class="counter-box flex pt-[3rem] items-center gap-[0.5rem]">
    <div class="counter-1">
      <h2 class="font-bold text-[2.5rem]">{{ counter1 }}+</h2>
      <span class="text-[1rem] font-normal text-c100 text-opacity-60">{{ content.header.countTwoHundred }}</span>
    </div>
    <div class="counter-2">
      <h2 class="font-bold text-[2.5rem]">{{ counter2 }}+</h2>
      <span class="text-[1rem] font-normal text-c100 text-opacity-60">{{ content.header.countTwoThousand }}</span>
    </div>
    <span class="counter-line"></span>
    <div class="counter-3">
      <h2 class="font-bold text-[2.5rem]">{{ counter3 }}+</h2>
      <spon class="text-[1rem] font-normal text-c100 text-opacity-60">{{ content.header.countThirtyThousand }}</spon>
    </div>
  </div>
</template>

<script setup>
import content from "@/data/content.json";
import { ref, onMounted } from 'vue';

const counter1 = ref(0);
const counter2 = ref(0);
const counter3 = ref(0);

const target1 = 200;
const target2 = 2000;
const target3 = 30000;

const incrementCounter = (counter, target) => {
  const incrementAmount = target / 100;
  let currentValue = 0;

  const intervalId = setInterval(() => {
    if (currentValue < target) {
      currentValue += incrementAmount;
      counter.value = Math.floor(currentValue);
    } else {
      clearInterval(intervalId);
    }
  }, 10);
};

onMounted(() => {
  incrementCounter(counter1, target1);
  incrementCounter(counter2, target2);
  incrementCounter(counter3, target3);
});
</script>

<style scoped>
p {
  font-size: 24px;
  font-weight: bold;
  animation: fadeIn 2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
