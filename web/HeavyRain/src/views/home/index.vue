<template>
    <div>
        {{ userStore }}
    </div>
</template>

<script setup>
import { useUserStore } from "@/store"
const userStore = useUserStore()

</script>
