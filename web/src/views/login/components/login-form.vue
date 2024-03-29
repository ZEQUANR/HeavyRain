<template>
  <a-tabs default-active-key="1">
    <a-tab-pane key="1">
      <template #title> <div style="font-size: 24px">登录</div> </template>
      <a-form
        ref="loginForm"
        :model="userInfo"
        class="login-form"
        layout="vertical"
        @submit="loginHandleSubmit"
      >
        <a-form-item
          field="account"
          :rules="[{ required: true, message: '用户名不能为空' }]"
          :validate-trigger="['change', 'blur']"
          hide-label
        >
          <a-input v-model="userInfo.account" :placeholder="'用户名'">
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          field="password"
          :rules="[{ required: true, message: '密码不能为空' }]"
          :validate-trigger="['change', 'blur']"
          hide-label
        >
          <a-input-password
            v-model="userInfo.password"
            :placeholder="'密码'"
            allow-clear
          >
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>

        <a-space :size="16" direction="vertical">
          <div class="login-form-password-actions">
            <a-checkbox
              checked="rememberPassword"
              :model-value="loginConfig.rememberPassword"
              @change="setRememberPassword"
            >
              {{ '记住密码' }}
            </a-checkbox>
            <a-link>{{ '忘记密码' }}</a-link>
          </div>
          <a-button type="primary" html-type="submit" long>
            {{ '登录' }}
          </a-button>
          <a-button
            type="text"
            long
            class="login-form-register-btn"
            @click="isRegister = !isRegister"
          >
            {{ '注册账号' }}
          </a-button>
        </a-space>
      </a-form>
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #title> <div style="font-size: 24px">注册</div> </template>
      <a-form
        ref="registerForm"
        :model="registerInfo"
        class="login-form"
        layout="vertical"
        @submit="registerHandleSubmit"
      >
        <a-form-item
          field="account"
          :rules="[{ required: true, message: '用户名不能为空' }]"
          :validate-trigger="['change', 'blur']"
          hide-label
        >
          <a-input v-model="registerInfo.account" :placeholder="'用户名'">
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          field="password"
          :rules="[{ required: true, message: '密码是必需的' }]"
          :validate-trigger="['change', 'blur']"
          hide-label
        >
          <a-input-password
            v-model="registerInfo.password"
            :placeholder="'密码'"
            allow-clear
          >
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item
          field="confirmPassword"
          :rules="[
            {
              required: true,
              message: '密码是必需的',
            },
            {
              validator: (value, cb) => {
                if (value !== registerInfo.password) {
                  cb('两个密码不匹配');
                } else {
                  cb();
                }
              },
            },
          ]"
          :validate-trigger="['change', 'blur']"
          hide-label
        >
          <a-input-password
            v-model="registerInfo.confirmPassword"
            :placeholder="'确认密码'"
            allow-clear
          >
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item
          field="email"
          :rules="[{ type: 'email', required: true, message: '邮箱是必须的' }]"
          :validate-trigger="['change', 'blur']"
          hide-label
        >
          <a-input
            v-model="registerInfo.email"
            :placeholder="'邮箱'"
            allow-clear
          >
            <template #prefix>
              <icon-email />
            </template>
          </a-input>
        </a-form-item>

        <a-space :size="16" direction="vertical">
          <div class="login-form-password-actions">
            <a-checkbox
              checked="rememberPassword"
              :model-value="loginConfig.rememberPassword"
              @change="setRememberPassword"
            >
              {{ '记住密码' }}
            </a-checkbox>
            <a-link>{{ '忘记密码' }}</a-link>
          </div>
          <a-button type="primary" html-type="submit" long>
            {{ '注册' }}
          </a-button>
        </a-space>
      </a-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import { useRouter } from 'vue-router';
  import { Message } from '@arco-design/web-vue';
  import { useStorage } from '@vueuse/core';
  import { useUserStore } from '@/store';
  import useLoading from '@/hooks/loading';

  const router = useRouter();
  const errorMessage = ref('');
  const userStore = useUserStore();

  const loginConfig = useStorage('login-config', {
    rememberPassword: true,
    account: '',
    password: '',
  });

  const userInfo = reactive({
    account: loginConfig.value.account,
    password: loginConfig.value.password,
  });

  const { loading, setLoading } = useLoading();
  const loginHandleSubmit = async ({ errors, values }) => {
    if (loading.value) return;
    if (!errors) {
      setLoading(true);
      try {
        await userStore.login(values);
        const { redirect, ...othersQuery } = router.currentRoute.value.query;
        router.push({
          name: redirect || 'home',
          query: {
            ...othersQuery,
          },
        });
        Message.success('欢迎使用');
        const { rememberPassword } = loginConfig.value;
        const { account, password } = values;
        // 实际生产环境需要进行加密存储。
        // The actual production environment requires encrypted storage.
        loginConfig.value.account = rememberPassword ? account : '';
        loginConfig.value.password = rememberPassword ? password : '';
      } catch (err) {
        errorMessage.value = err.message;
      } finally {
        setLoading(false);
      }
    }
  };
  const setRememberPassword = (value) => {
    loginConfig.value.rememberPassword = value;
  };

  const isRegister = ref(true);

  const registerInfo = reactive({
    account: '',
    password: '',
    confirmPassword: '',
    email: '',
  });
  const registerHandleSubmit = async ({ errors, values }) => {
    if (loading.value) return;
    if (!errors) {
      setLoading(true);
      try {
        await userStore.register(values);
        window.console.log(errors, values);
        Message.success('注册成功');
      } catch (err) {
        errorMessage.value = err.message;
      } finally {
        setLoading(false);
      }
    }
  };
</script>

<!-- <style lang="less">
  .arco-tabs-nav-tab-list {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
</style> -->

<style lang="less" scoped>
  .login-form {
    &-wrapper {
      width: 320px;
    }

    &-title {
      color: var(--color-text-1);
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
    }

    &-sub-title {
      color: var(--color-text-3);
      font-size: 16px;
      line-height: 24px;
    }

    &-error-msg {
      height: 32px;
      color: rgb(var(--red-6));
      line-height: 32px;
    }

    &-password-actions {
      display: flex;
      justify-content: space-between;
    }

    &-register-btn {
      color: var(--color-text-3) !important;
    }
  }
</style>
