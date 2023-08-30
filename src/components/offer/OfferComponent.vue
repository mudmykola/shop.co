<script setup>
import content from '@/data/content.json';
import { XMarkIcon } from '@heroicons/vue/24/solid';
</script>

<template>
    <div class="bg-c100 w-full">
        <div class="container">
            <div class="flex items-center justify-center relative">
                <div class="flex justify-center py-[0.625rem]">
                    <h2 class="text-default text-center font-light">{{ content.offer.title }}</h2>
                    <router-link class="text-default font-bold underline pl-[0.313rem]"
                        :to="content.offer.link">{{ content.offer.label }}</router-link>
                </div>
                <XMarkIcon class="h-6 w-6 absolute right-0 cursor-pointer text-default" />
            </div>
        </div>
    </div>
</template>