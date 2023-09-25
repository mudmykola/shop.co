<script setup>
const images = [
  { src: 'banner-1.png', alt: 'Image 1' },
  { src: 'banner-2.png', alt: 'Image 2' },
  { src: 'banner-3.png', alt: 'Image 3' },
  { src: 'banner-4.png', alt: 'Image 4' },

];
</script>

<template>
<div class="w-full h-[7.625rem] flex justify-center items-center bg-c100 text-default">
  <ul class="flex items-center gap-[6.25rem]">
    <li v-for="(image, index) in images" :key="index">
      <img :src="require('@/assets/images/' + image.src)" :alt="image.alt">
    </li>
  </ul>
</div>
</template>
