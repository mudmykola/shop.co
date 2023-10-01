<script setup>
import content from "@/data/content.json";
import FeaturedMenuListComponent
  from "@/components/featured-menu/FeaturedMenuListComponent.vue";
</script>

<template>
  <div class="featured-menu bg-c101 rounded-[2.5rem] pb-[4.625rem] container">
    <h2 class="text-center text-[3rem] leading-[3.25rem] font-bold uppercase py-[4.375rem]">{{ content.headerMenu.title }}</h2>
    <FeaturedMenuListComponent />
  </div>
</template>
