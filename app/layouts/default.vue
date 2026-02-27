<template>
  <div>
    <hander>
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
    </hander>
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
  import '../assets/css/layouts/default.less';
</script>
