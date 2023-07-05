<script setup lang="ts">
import { Typography } from 'ant-design-vue';
import { CONFIG_MENU } from './data'
</script>

<template>
  <div class="root">
    <div v-for="config in CONFIG_MENU" class="section">
      <Typography.Text type="secondary">{{ config.label }}</Typography.Text>
      <div>
        内容
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.root {
  padding: 16px 16px;

  .section + .section {
    margin-top: 16px;
  }
}
</style>
