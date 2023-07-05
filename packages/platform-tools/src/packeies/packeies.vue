<script setup lang="ts">
import { PACKET_MENU } from "./data";
</script>

<template>
  <div class="root">
    <a-collapse ghost expand-icon-position="end">
      <a-collapse-panel v-for="category in PACKET_MENU" :key="category.title">
        <template v-slot:header>
          {{ category.title }}
        </template>
        <a-collapse
          ghost
          expand-icon-position="end"
          v-for="sub in category.children"
          :key="sub.title"
        >
          <a-collapse-panel :header="sub.title">
            {{ sub.children }}
          </a-collapse-panel>
        </a-collapse>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<style lang="less" scoped>
.root {
  padding: 8px 0;
}
</style>
