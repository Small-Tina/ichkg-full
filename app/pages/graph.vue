<template>
    <div>
        111
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/project')

console.log(data.value)
</script>
