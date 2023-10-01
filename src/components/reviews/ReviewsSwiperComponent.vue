<template>
  <div class="reviews-box">
    <div class="reviews-title">
      <h2>{{ content.reviews.title }}</h2>
    </div>
    <div class="reviews-swiper__navigation">
      <button @click="goToPrevSlide">Previous</button>
      <button @click="goToNextSlide">Next</button>
    </div>
  </div>

  <swiper class="mySwiper" :modules="modules" @swiper="onSwiperInitialized" :sliderPerView="3" :spaceBetween="30">
    <swiper-slide  v-for="review in reviews" :key="review.id">
      <div class="reviews-swiper__box w-[400px]">
        <div class="reviews-swiper__rating">
          <template v-for="n in 5">
            <span :key="n" class="filled text-c102 text-[1.5rem]"
                  v-if="n <= review.rating"
            >★</span>
            <span :key="`empty-${n}`" class="empty text-c102 text-[1.5rem]" v-else>☆</span>
          </template>
        </div>
        <div class="reviews-swiper__name font-bold">{{ review.name }}</div>
        <div class="reviews-swiper__comment">{{ review.body }}</div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import content from "@/data/content.json";
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation } from "swiper/modules";

const store = useStore();
const modules = ref([Navigation]);

let swiperInstance = null;

const onSwiperInitialized = (swiper) => {
  swiperInstance = swiper;
};

const goToPrevSlide = () => {
  if (swiperInstance) {
    swiperInstance.slidePrev();
  }
};

const goToNextSlide = () => {
  if (swiperInstance) {
    swiperInstance.slideNext();
  }
};

const reviews = computed(() => store.getters["allReviews"]);

onMounted(async () => {
  await store.dispatch("fetchComments");
});
</script>
