<script setup>
import content from '@/data/content.json';
import NavigationMenuComponent from '@/components/navigation/NavigationMenuComponent'
</script>

<template>
    <div class="navigation flex items-center">
        <router-link class="logo" :to="content.navigation.logoUrl">
            {{ content.navigation.logo }}
        </router-link>
        <NavigationMenuComponent />
    </div>
</template>