<script setup >
import OfferComponent from '@/components/offer/OfferComponent.vue';
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
</script>

<template>
    <div class="wrapper flex flex-col justify-center items-center">
        <OfferComponent />
        <NavigationComponent class=" container" />
        <main>
            <slot />
        </main>
        <FooterComponent />
    </div>
</template>
