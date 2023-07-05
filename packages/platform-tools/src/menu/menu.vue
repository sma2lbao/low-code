<script setup lang="ts">
import { Space, Button } from 'ant-design-vue';
import {
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
</script>

<template>
  <div class="root">
    <Space direction="vertical" align="center">
      <Button type="text" shape="circle" ghost><home-outlined /></Button>
      <Button type="text" shape="circle" ghost><setting-outlined /></Button>
    </Space>
  </div>
</template>

<style lang="less" scoped>
.root {
  display: flex;
  flex-direction: column;
  padding: 16px 0;
}
</style>
