<script setup lang="ts">
import { Button } from 'ant-design-vue';
import {
  HomeOutlined,
} from '@ant-design/icons-vue';
</script>

<template>
  <div class="root">
    <div class="home-icon">
      <Button type="text" shape="circle" ghost><home-outlined /></Button>
    </div>
    <div class="project">
      logo
      <div>项目名
        <span>相关tag</span>
      </div>
    </div>
    <div class="tools">切换不同屏幕工具栏</div>

    <div class="progress">预览发布区</div>
  </div>
</template>

<style scoped lang="less">
.root {
  display: flex;
  height: 60px;
  align-items: center;
  .home-icon {
    flex: 1;
    align-self: center;
    text-align: center;
  }

  .project {
    display: flex;
    flex: 5;
  }
  .tools {
    flex: 6;
    text-align: center;
  }

  .progress {
    flex: 6;
    text-align: end;
    padding-right: 24px;
  }
}
</style>
