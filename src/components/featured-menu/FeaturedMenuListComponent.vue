<script setup>
import {ref} from "vue";
import content from "@/data/content.json";

const menuItems = ref([
  {
    name: 'Casual',
    imageSrc: require("@/assets/images/header-menu-1.png"),
    width: "407px",
    text: content.headerMenu.linkCasual
  },
  {
    name: 'Formal',
    imageSrc: require("@/assets/images/header-menu-2.png"),
    width: "684px",
    text: content.headerMenu.linkFormal
  },
  {
    name: 'Party',
    imageSrc: require("@/assets/images/header-menu-3.png"),
    width: "684px",
    text: content.headerMenu.linkParty
  },
  {
    name: 'Gym',
    imageSrc: require("@/assets/images/header-menu-4.png"),
    width: "407px",
    text: content.headerMenu.linkGym
  },
])
</script>

<template>
  <div>
    <ul class="w-full flex flex-wrap justify-center gap-[1.25rem]">
      <li class="relative transition ease-in-out hover:duration-700 hover:shadow-xl rounded-[1.25rem]" v-for="(menuItem, index) in menuItems" :key="index"
          :style="{ width: menuItem.width }">
        <router-link :to="`/${menuItem.name.toLowerCase()}`">
          <h2 class="absolute font-bold text-[2.25rem] leading-[2.625rem] pt-[1.563rem] pl-[2.25rem]">{{ menuItem.text }}</h2>
          <img :src="menuItem.imageSrc" alt="header-menu-img"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>



