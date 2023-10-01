<template>
  <div class="product-list">
    <h2 class="text-center font-bold text-[3rem] leading-[3.25rem] uppercase">
      {{ content.selling.title }}
    </h2>
    <ul class="flex items-center justify-center pt-[3.25rem] gap-[1.25rem]">
      <li v-for="product in sellings" :key="product.id">
        <div class="product-image transition-all hover:shadow-xl hover:duration-700 rounded-[1.25rem]">
          <img
              class="w-[295px] h-[298px] rounded-[1.25rem]"
              :src="product.image + '?timestamp=' + Date.now()"
              alt="selling-image"
              loading="lazy"
          />
        </div>
        <h2 class="font-bold text-[1.25rem] leading-[1.563rem] pt-[1rem] capitalize">
          {{ product.title }}
        </h2>
        <div class="rating flex items-center">
          <template v-for="n in 5">
            <span
                class="filled text-c102 text-[1.5rem]"
                :key="'filled-' + n"
                v-if="n <= product.rating"
            >
              ★
            </span>
            <span class="text-c102 text-[1.5rem]" :key="'empty-' + n" v-else>
              ☆
            </span>
          </template>
          <div class="rating-num pl-[0.813rem]">
            <p>
              {{ product.rating }} /
              <span class="text-c100 text-opacity-60">
                {{ content.selling.ratingNum }}
              </span>
            </p>
          </div>
        </div>
        <div class="product-price flex items-center gap-[0.625rem]">
          <p class="font-bold text-[1.5rem] leading-[1.875rem]">
            ${{ product.price }}
          </p>
          <span class="text-[1.5rem] text-c100 text-opacity-40 font-bold line-through">
            {{ product.noDiscount }}
          </span>
          <h2
              class="text-c104 text-[0.75rem] font-medium bg-c104 bg-opacity-10 px-[14px] py-[6px] rounded-[62px]"
              v-if="product.discount"
          >
            {{ product.discount }}
          </h2>
        </div>
      </li>
    </ul>
    <button
        class="arrivals-btn flex m-auto border-[0.063rem] border-c100 border-opacity-10 text-[1rem] font-medium rounded-[3.875rem] py-[1rem] px-[3.375rem] mt-[2.25rem] mb-[4rem] transition ease-out hover:ease-in hover:bg-c100 hover:text-default hover:transition-all hover:shadow-lg hover:shadow-c101 hover:duration-300 duration-150"
        @click="showArrivals = !showArrivals"
    >
      {{ content.selling.btn }}
    </button>
  </div>
</template>

<script setup>
import content from "@/data/content.json";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";

const store = useStore();
const sellings = ref([]);

const getSellingsData = () => {
  const savedSellings = localStorage.getItem("sellings");
  if (savedSellings) {
    return JSON.parse(savedSellings);
  }
  return store.getters.allSellings;
};

sellings.value = getSellingsData();

onMounted(() => {
  store.dispatch("fetchSellings").then(() => {
    sellings.value = getSellingsData();
  });
});
</script>
