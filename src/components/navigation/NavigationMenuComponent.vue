<script setup>
import { ref } from 'vue';

const menuItems = ref([
    {
        id: 1, title: 'Shop', subMenu: [
            { title: 'OnSale', link: '/shop/onsale' },
            { title: 'New Arrivals', link: '/shop/new-arrivals' },
            { title: 'Brands', link: '/shop/brands' }
        ], isOpen: false
    },
    { id: 2, title: 'OnSale', isOpen: false },
    { id: 3, title: 'New Arrivals', isOpen: false },
    { id: 4, title: 'Brands', isOpen: false },
]);

const toggleSubMenu = (item) => {
    item.isOpen = !item.isOpen;
};
</script>

<template>
    <div class="bg-default p-4">
        <ul class="flex space-x-4">
            <li v-for="item in menuItems" :key="item.id" class="relative">
                <div :class="{
                    'text-blue-500': item.isOpen,
                    'text-black': !item.isOpen,
                }" class="cursor-pointer font-regular text-[1rem] flex  items-center justify-center"
                    @click="toggleSubMenu(item)">
                    {{ item.title }}
                    <span v-if="item.subMenu" class="ml-1">{{ item.isOpen ? '▴' : '▾' }}</span>
                </div>
                <div v-if="item.isOpen" class="absolute bg-white border p-2 mt-2">
                    <div v-for="subItem in item.subMenu" :key="subItem">
                        <router-link :to="subItem.link">{{ subItem.title }}</router-link>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
