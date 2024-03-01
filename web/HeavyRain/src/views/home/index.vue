<template>
  <div>
    {{ userStore.role }}
  </div>
</template>

<script setup>
  import { useUserStore } from '@/store';
  const userStore = useUserStore();
</script>
