<script setup lang="ts"></script>

<template>
  <div class="root">
    <slot name="topbar"></slot>
    <a-divider style="margin: 0" />
    <div class="body">
      <div class="menu">
        <slot name="menu"></slot>
        <a-divider type="vertical" class="divider-vertical" />
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

.divider-vertical {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0;
  height: 100%;
}

.body {
  display: flex;
  width: 100%;
  flex: 1;

  .menu {
    flex: 1;
    position: relative;
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
