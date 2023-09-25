<template>
  <div class="product-list pt-[4.688rem]">
    <h2 class="text-center font-bold text-[3rem] leading-[3.25rem]">{{ content.arrivals.title }}</h2>
    <ul class="flex items-center justify-center pt-[3.25rem] gap-[1.25rem]">
      <li v-for="product in products" :key="product.id">
        <div class="product-image">
          <img class="w-[295px] h-[298px] rounded-[1.25rem]" :src="product.image + '?timestamp=' + Date.now()" alt="product-image" loading="lazy">
        </div>
        <h2 class="font-bold text-[1.25rem] leading-[1.563rem] pt-[1rem]">{{ product.title }}</h2>
        <div class="rating flex items-center">
          <template v-for="n in 5">
            <span class="filled text-c102 text-[1.5rem]" :key="'filled-' + n" v-if="n <= product.rating">★</span>
            <span class="text-c102 text-[1.5rem]" :key="'empty-' + n" v-else>☆</span>
          </template>
          <div class="rating-num pl-[0.813rem]">
            <p>{{ product.rating }} / <span class="text-c100 text-opacity-60">{{ content.arrivals.ratingNum }}</span> </p>
          </div>
        </div>
        <p class="font-bold text-[1.5rem] leading-[1.875rem]">${{ product.price }}</p>
      </li>
    </ul>
    <button class="flex m-auto border-[0.063rem] border-c100 border-opacity-10 text-[1rem] font-medium rounded-[3.875rem] py-[1rem] px-[3.375rem] mt-[2.25rem] mb-[4rem]">{{content.arrivals.btn}}</button>
  </div>
</template>

<script setup>
import content from "@/data/content.json";
import { useStore } from 'vuex';
import { onMounted } from 'vue';

const store = useStore();
const products = store.getters.allProducts;

const savedProducts = localStorage.getItem('products');
if (savedProducts) {
  store.commit('setProducts', JSON.parse(savedProducts));
}

onMounted(() => {
  store.dispatch('fetchProducts');
});
</script>
