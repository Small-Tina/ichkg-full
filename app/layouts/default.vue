<template>
    <div>
        <header>
            <UContainer>
                <UButton
                    color="neutral"
                    variant="outline"
                    >主页</UButton
                >
                <UButton
                    color="neutral"
                    variant="outline"
                    >图谱
                </UButton>
            </UContainer>
        </header>
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup>
    import '../assets/css/layouts/default.less';
</script>
