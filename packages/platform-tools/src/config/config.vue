<script setup lang="ts">
import { Typography } from "ant-design-vue";
import { CONFIG_MENU } from "./data";
import { Align as AlignType, ConfigCategory } from "./interface";
import Align from "./align.vue";
import { ref } from "vue";

const configRef = ref({
  align: AlignType.Start,
});
</script>

<template>
  <div class="root">
    <div v-for="config in CONFIG_MENU" class="section" :key="config.name">
      <Typography.Text type="secondary">{{ config.label }}</Typography.Text>
      <div v-if="config.category === ConfigCategory.Align">
        <Align v-model:align="configRef.align" />
      </div>
      <div v-else>内容</div>
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
