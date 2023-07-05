<script setup lang="ts">
import { ref } from "vue";
import { CONFIG_MENU } from "./data";
import { Align as AlignType, ConfigCategory } from "./interface";
import Align from "./align.vue";
import Size from "./size.vue";

const configRef = ref({
  align: AlignType.Start,
});
</script>

<template>
  <div class="root">
    <div v-for="config in CONFIG_MENU" class="section" :key="config.name">
      <a-typography-text type="secondary">{{ config.label }}</a-typography-text>
      <div v-if="config.category === ConfigCategory.Align">
        <Align v-model:align="configRef.align" />
      </div>
      <div v-else-if="config.category === ConfigCategory.Size">
        <Size />
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
