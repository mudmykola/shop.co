<script setup>
import { ref } from "vue";
import content from "@/data/content.json";

const iconCredits = ref([
  {
    iconSrc: require("@/assets/images/svg/icon-visa.svg"),
    width: "47px",
  },
  {
    iconSrc: require("@/assets/images/svg/icon-master.svg"),
    width: "47px",
  },
  {
    iconSrc: require("@/assets/images/svg/icon-paypal.svg"),
    width: "47px",
  },
  {
    iconSrc: require("@/assets/images/svg/icon-apay.svg"),
    width: "47px",
  },
  {
    iconSrc: require("@/assets/images/svg/icon-gpay.svg"),
    width: "47px",
  },
]);
</script>

<template>
  <div class="footer-copy mt-[3.125rem] mb-[5.5rem]">
    <div
      class="footer-copy__line w-full h-full border-b border-b-[0.063rem] border-b-c100 border-opacity-20 mb-[4rem]"
    >
      <span></span>
    </div>
    <div class="footer-copy__text grid grid-cols-2 justify-end items-center">
      <h2 class="text-c100 text-opacity-60 text-[0.875rem]">
        {{ content.footer.footerCopyText }}
      </h2>
      <div class="footer-copy__card">
        <ul class="flex items-center justify-end">
          <li
            v-for="(iconCredit, index) in iconCredits"
            :key="index"
            :style="{ width: iconCredit.width }"
          >
            <img :src="iconCredit.iconSrc" alt="footer-copy__credit" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
