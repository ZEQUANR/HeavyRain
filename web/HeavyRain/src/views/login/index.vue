<template>
  <div class="container">
    <LoginIcon></LoginIcon>
    <div class="banner">
      <div class="banner-inner">
        <LoginBanner />
      </div>
    </div>
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
      <div class="footer">
        <LoginFooter />
      </div>
    </div>
  </div>
</template>

<script setup>
import LoginIcon from "./components/login-icon.vue"
import LoginBanner from "./components/login-banner.vue"
import LoginForm from "./components/login-from.vue"
import LoginFooter from "./components/login-footer.vue"
</script>

<style lang="less" scoped>
.container {
  display: flex;
  height: 100vh;

  .banner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
    // background: url(../../assets/images/login-banner.png);
    background-size: 100% 100%;

    &-inner {
      flex: 1;
      height: 100%;
    }
  }

  .content {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  .footer {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>

<style lang="less" scoped>
@media (max-width: 992px) {
  .container {
    .banner {
      width: 25%;
    }
  }
}
</style>
