<script setup lang="ts">
import { Collapse, CollapsePanel } from 'ant-design-vue';
// import Icon, { HomeOutlined } from '@ant-design/icons-vue';
import 'ant-design-vue/lib/collapse/style'
import { PACKET_MENU } from './data'


</script>

<template>
  <div class="root">
    <collapse ghost expand-icon-position="end">
      <collapse-panel v-for="category in PACKET_MENU" :key="category.title">
        <template v-slot:header>
         {{ category.title }}
        </template>
        <collapse ghost expand-icon-position="end" v-for="sub in category.children" :key="sub.title">
          <collapse-panel :header="sub.title">{{ sub.children }}</collapse-panel>
        </collapse>
      </collapse-panel>
    </collapse>
  </div>
</template>

<style lang="less" scoped>
.root {
  padding: 8px 0;
}
</style>
