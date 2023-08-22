<script setup >
import OfferComponent from '@/components/offer/OfferComponent.vue';
import NavigationComponent from "@/components/navigation/NavigationComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
</script>

<template>
    <div class="wrapper">
        <OfferComponent />
        <NavigationComponent class=" container" />
        <main>
            <slot />
        </main>
        <FooterComponent />
    </div>
</template>
