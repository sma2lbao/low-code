<script setup lang="ts">
import { DefaultLayout, Packeies, Menu, Config, Board, Topbar } from '@low-code/platform-tools';
</script>

<template>
  <default-layout>
    <template #topbar>
      <Topbar />
    </template>
    <template #menu>
      <Menu />
    </template>

    <template #packeies>
      <Packeies />
    </template>

    <template #board>
      <Board />
    </template>

    <template #config>
      <Config />
    </template>
  </default-layout>

</template>

<style lang="less" scoped>
</style>
