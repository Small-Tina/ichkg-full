<template>
    <div>
        <header>
            <UContainer class="flex items-center justify-between px-4 mt-3 h-12 bg-gray-200 rounded-md shadow-sm">
                <UContainer>
                    <h1 class="flex items-center gap-2 text-2xl font-semibold">
                        <UIcon name="i-heroicons-circle-stack-16-solid" class="w-7 h-7 text-primary" />
                        京剧知识图谱
                    </h1>
                </UContainer>
                <UContainer class="flex justify-end gap-5">
                    <UNavigationMenu :items="items" />
                </UContainer>
            </UContainer>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue'


import '../assets/css/layouts/default.less';

const items = ref<NavigationMenuItem[]>([

    {
        label: '首页',
        icon: 'i-lucide-home',
        to: '/',
    },
    {
        label: '图谱',
        icon: 'i-lucide-book-open',
        to: '/graph',
        children: [
            {
                label: '人物关系图',
                description: '查看京剧传承人之间的关系',
                icon: 'i-lucide-house'
            },
            {
                label: '四大名旦传承图',
                description: '查看四大名旦的传承',
                icon: 'i-lucide-house'
            },
        ]
    },
    {
        label: '关于此项目',
        icon: 'i-lucide-book',
        to: '/about'
    }
])
</script>
