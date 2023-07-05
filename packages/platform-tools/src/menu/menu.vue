<script setup lang="ts">
import { HomeOutlined, SettingOutlined } from "@ant-design/icons-vue";
</script>

<template>
  <div class="root">
    <a-space direction="vertical" align="center">
      <a-button shape="circle" type="text">
        <home-outlined />
      </a-button>
      <a-button shape="circle" type="text">
        <setting-outlined />
      </a-button>
    </a-space>
  </div>
</template>

<style lang="less" scoped>
.root {
  display: flex;
  flex-direction: column;
  padding: 16px 0;
}
</style>
