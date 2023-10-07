<script setup>
import content from "@/data/content.json";
import { ref } from "vue";

const socialLinks = ref([
  {
    id: 1,
    link: "https://www.facebook.com/example",
    iconClass: "fa-bitcoine",
  },
  {
    id: 2,
    link: "https://www.twitter.com/example",
    iconClass: "fa-twitter",
  },
]);
</script>

<template>
  <div class="footer-logo">
    <router-link
      to="/"
      class="footer-logo__link font-black text-[2rem] font-ubuntu pr-[2.5rem]"
    >
      {{ content.navigation.logo }}
    </router-link>
    <p>
      {{ content.footer.footerLogoDesc }}
    </p>
    <div class="footer-logo__social">
      <ul>
        <li v-for="social in socialLinks" :key="social.id">
          <router-link :to="social.link">
            <font-awesome-icon
              :icon="['fa', social.iconClass]"
              style="color: #000000"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
