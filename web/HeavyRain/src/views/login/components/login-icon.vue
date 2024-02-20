<template>
  <div class="logo">
    <img
      alt="logo"
      src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
    />
    <div class="logo-text">Arco Design Vue</div>
  </div>
</template>

<style lang="less" setup>
.logo {
  position: fixed;
  top: 24px;
  left: 22px;
  z-index: 1;
  display: inline-flex;
  align-items: center;

  &-text {
    margin-right: 4px;
    margin-left: 4px;
    color: var(--color-neutral-10);
    font-size: 20px;
  }
}
</style>
