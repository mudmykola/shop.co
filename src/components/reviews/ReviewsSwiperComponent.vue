<template>
  <div class="reviews-box flex items-center justify-between">
    <div class="reviews-title pb-[2.5rem]">
      <h2 class="text-[3rem] leading-[3.25rem] font-bold">
        {{ content.reviews.title }}
      </h2>
    </div>
    <div class="reviews-swiper__navigation flex gap-[1rem] text-[1.5rem]">
      <button @click="goToPrevSlide">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </button>
      <button @click="goToNextSlide">
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </button>
    </div>
  </div>

  <swiper
    class="mySwiper pb-[1.5rem]"
    :modules="modules"
    @swiper="onSwiperInitialized"
    :sliderPerView="2"
    :spaceBetween="30"
  >
    <swiper-slide
      class="mt-[1rem] rounded-[1.25rem] cursor-pointer border border-c103 duration-300 h-[17rem] hover:shadow-xl hover:duration-700 hover:rounded-[1.25rem]"
      v-for="review in reviews"
      :key="review.id"
      style="max-width: 400px"
    >
      <div class="reviews-swiper__box w-[25rem] py-[1.75] px-[2rem]">
        <div class="reviews-swiper__rating mb-[0.938rem]">
          <template v-for="n in 5">
            <span
              :key="n"
              class="filled text-c102 text-[1.5rem]"
              v-if="n <= review.rating"
              >★</span
            >
            <span
              :key="`empty-${n}`"
              class="empty text-c102 text-[1.5rem]"
              v-else
              >★</span
            >
          </template>
        </div>
        <div
          class="reviews-swiper__name font-bold text-[1.25rem] mb-[0.938rem]"
        >
          {{ review.name }}
        </div>
        <div
          class="reviews-swiper__comment text-[1rem] text-c100 text-opacity-60"
        >
          {{ review.body }}
        </div>
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
