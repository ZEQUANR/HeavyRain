<template>
  <div style="width: 600px; height: 600px; background: red">
    {{ userStore.role }}
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store';
  const userStore = useUserStore();
</script>

<style lang="less" scoped></style>
