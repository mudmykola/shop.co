<script setup>
import content from "@/data/content";
import { ref } from "vue";

const searchText = ref("");

const handleInput = () => {
  console.log("Searching for:", searchText.value);
};

const handleKeyDown = (event) => {
  if (event.key !== "Enter") {
    console.log("Searching for:", searchText.value);
  }
};
</script>

<template>
  <div
    class="search flex items-center bg-c101 rounded-[3.875rem] py-[0.75rem] w-[36.063rem]"
  >
    <font-awesome-icon
      class="pl-[1rem]"
      style="color: gray"
      :icon="['fas', 'magnifying-glass']"
    />
    <input
      v-model="searchText"
      @input="handleInput"
      @keydown="handleKeyDown"
      class="search-input bg-inherit bg-c101 outline-none pl-[0.75rem] w-full"
      type="text"
      :placeholder="content.search.placeholder"
    />
  </div>
</template>
