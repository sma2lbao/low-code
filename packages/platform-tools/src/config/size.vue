<script setup lang="ts"></script>

<template>
  <div class="root">
    <a-input>
      <template #prefix>W</template>
    </a-input>
    <a-input>
      <template #prefix>H</template>
    </a-input>
  </div>
</template>

<style lang="less" scoped>
.root {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
