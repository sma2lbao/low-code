<script setup lang="ts">
</script>

<template>
  <div class="root">
    <slot name="topbar"></slot>
    <div class="body">
      <div class="menu">
        <slot name="menu"></slot>
      </div>
      <div class="packeies">
        <slot name="packeies"></slot>
      </div>
      <div class="board">
        <slot name="board"></slot>
      </div>
      <div class="config">
        <slot name="config"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.body {
  display: flex;
  width: 100%;
  flex: 1;

  .menu {
    flex: 1;
  }

  .packeies {
    flex: 3;
  }

  .board {
    flex: 10;
  }

  .config {
    flex: 4;
  }
}
</style>
