<script lang="jsx">
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      return () => {
        return <div>Hello World</div>;
      };
    },
  });
</script>

<style lang="less" scoped>
  :deep(.arco-menu-inner) {
    .arco-menu-inline-header {
      display: flex;
      align-items: center;
    }
    .arco-icon {
      &:not(.arco-icon-down) {
        font-size: 18px;
      }
    }
  }
</style>
