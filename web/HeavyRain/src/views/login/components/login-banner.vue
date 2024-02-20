<template>
  <a-carousel class="carousel" animation-name="fade">
    <a-carousel-item v-for="item in carouselItem" :key="item.slogan">
      <div :key="item.slogan" class="carousel-item">
        <div class="carousel-title">{{ item.slogan }}</div>
        <div class="carousel-sub-title">{{ item.subSlogan }}</div>
        <!-- <img class="carousel-image" :src="item.image" /> -->
      </div>
    </a-carousel-item>
  </a-carousel>
</template>

<script lang="ts" setup>
import { computed } from "vue"
// import bannerImage from '@/assets/images/login-banners.png';

const carouselItem = computed(() => [
  {
    slogan: "标题1",
    subSlogan: "丰富的的页面模板，覆盖大多数典型业务场景1",
    // image: bannerImage,
  },
  {
    slogan: "标题2",
    subSlogan: "丰富的的页面模板，覆盖大多数典型业务场景2",
    // image: bannerImage,
  },
  {
    slogan: "标题3",
    subSlogan: "丰富的的页面模板，覆盖大多数典型业务场景3",
    // image: bannerImage,
  },
])
</script>

<style lang="less" scoped>
.carousel {
  height: 100%;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &-title {
    color: var(--color-neutral-10);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }

  &-sub-title {
    margin-top: 8px;
    color: var(--color-neutral-10);
    font-size: 14px;
    line-height: 22px;
  }

  &-image {
    width: 320px;
    margin-top: 30px;
  }
}
</style>
