<template>
  <LayoutComponent>
    <HeaderComponent />
    <BannerComponent />
    <ArrivalsComponent />
    <SellingComponent />
  </LayoutComponent>

</template>

<script setup>
import LayoutComponent from '@/layout/LayoutComponent';
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import ArrivalsComponent from "@/components/arrivals/ArrivalsComponent.vue";
import BannerComponent from "@/components/banner/BannerComponent.vue";
import SellingComponent from "@/components/selling/SellingComponent.vue";
</script>
