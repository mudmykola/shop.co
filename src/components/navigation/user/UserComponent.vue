<script setup>
import { useRouter } from 'vue-router';
import UserShopingComponent from './UserShopingComponent.vue';
import UserLoginComponentVue from './UserLoginComponent.vue';

const router = useRouter();

const redirectToCheckout = () => {
    router.push('/checkout');
};
</script>

<template>
    <div class="flex items-center gap-[0.875rem] pl-[2.5rem]">
        <UserShopingComponent @click="redirectToCheckout" />
        <UserLoginComponentVue />
    </div>
</template>
