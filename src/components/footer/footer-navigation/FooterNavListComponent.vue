<script setup>
import { ref } from "vue";

const sections = ref([
  {
    title: "Company",
    links: [
      { label: "About", url: "#" },
      { label: "Features", url: "#" },
      { label: "Works", url: "#" },
      { label: "Career", url: "#" },
    ],
  },
  {
    title: "help",
    links: [
      { label: "Customer Support", url: "#" },
      { label: "Delivery Details", url: "#" },
      { label: "Terms & Conditions", url: "#" },
      { label: "Privacy Policy", url: "#" },
    ],
  },
  {
    title: "faq",
    links: [
      { label: "Account", url: "#" },
      { label: "Manage Deliveries", url: "#" },
      { label: "Orders", url: "#" },
      { label: "Payments", url: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free eBooks", url: "#" },
      { label: "Development Tutorial", url: "#" },
      { label: "How to - Blog", url: "#" },
      { label: "Youtube Playlist", url: "#" },
    ],
  },
]);
</script>

<template>
  <div class="grid grid-cols-4 text-left gap-[6.25rem]">
    <div class="section" v-for="(section, index) in sections" :key="index">
      <h2 class="text-[1rem] font-medium capitalize">
        {{ section.title }}
      </h2>
      <ul class="grid gap-[0.4rem] pt-[2.5rem]">
        <li
          class="w-full text-left text-c100 text-opacity-60 text-[0.9rem]"
          v-for="(link, linkIndex) in section.links"
          :key="linkIndex"
        >
          <router-link :to="link.url">{{ link.label }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
