<script setup>
import content from "@/data/content.json";
import { ref } from 'vue';

const headerImg = ref(require('@/assets/images/header-img.jpg'));
const headerEl1 = ref(require('@/assets/images/header-el-1.png'));
</script>

<template>
  <div class="container">
    <div class="header flex">
      <div class="header-text w-[37.25rem] pt-[6.25rem] pl-[6.438rem] pr-[0.625rem]">
        <h1 class="text-[4rem] font-ubuntu leading-[4rem] font-bold uppercase ">{{ content.header.title }}</h1>
        <p class="text-[1rem] font-normal text-c100 text-opacity-60">{{ content.header.desc }}</p>
        <div class="header-text__number"></div>
      </div>
      <div class="header-img relative">
        <img :src="headerImg" alt="header-img" loading="lazy" />
        <img class="absolute top-[2.5rem] right-[2rem]" :src="headerEl1" alt="header-img" loading="lazy" />
        <img class="absolute top-[18rem] left-[3rem] w-[3.5rem] h-[3.5rem]" :src="headerEl1" alt="header-img" loading="lazy" />
      </div>
    </div>
  </div>
</template>
