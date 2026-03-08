<template>
    <div class="flex flex-col items-center justify-start text-center min-h-screen mt-40">
        <UIcon name="i-heroicons-circle-stack-16-solid" class="w-40 h-40 text-primary mb-8" />
        <div class="text-5xl mb-6 font-semibold">京剧知识图谱</div>
        <div class="text-2xl w-1/4 mb-6">一个基于Nuxt与ANTV G7的有关京剧文化的知识图谱系统</div>
        <div class="flex justify-center gap-4 mt-2 w-1/6 ">
            <UButton color="primary" size="xl" trailing-icon="i-lucide-arrow-right">
                <NuxtLink to="/graph">进入图谱</NuxtLink>
            </UButton>
            <UButton color="neutral" variant="outline" size="xl">
                <NuxtLink to="/about">关于此项目</NuxtLink>
            </UButton>
        </div>
    </div>
</template>
