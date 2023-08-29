<script setup>
import content from '@/data/content.json';
import NavigationMenuComponent from '@/components/navigation/NavigationMenuComponent'
import SearchComponent from './search/SearchComponent.vue';
</script>

<template>
    <div class="navigation flex items-center py-[2.313rem] justify-center">
        <router-link class="logo font-black text-[32px] font-ubuntu pr-[2.5rem]" :to="content.navigation.logoUrl">
            {{ content.navigation.logo }}
        </router-link>
        <NavigationMenuComponent />
        <SearchComponent />
    </div>
</template>