<script setup>
import content from "@/data/content.json";
</script>

<template>
  <div class="footer-logo w-[15.5rem]">
    <router-link
      to="/"
      class="footer-logo__link font-black text-[2rem] font-ubuntu pr-[2.5rem]"
    >
      {{ content.navigation.logo }}
    </router-link>
    <p
      class="text-[0.875rem] leading-[1.375rem] text-c100 text-opacity-60 mt-[1.563rem]"
    >
      {{ content.footer.footerLogoDesc }}
    </p>
  </div>
</template>
