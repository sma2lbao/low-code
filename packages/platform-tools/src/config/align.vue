<script setup lang="ts">
import type { RadioChangeEvent } from "ant-design-vue";
import {
  AlignCenterOutlined,
  AlignLeftOutlined,
  AlignRightOutlined,
} from "@ant-design/icons-vue";
import { Align } from "./interface";

export interface AlignConfigProps {
  align?: Align;
}

export interface AlignConfigEmits {
  (ename: "update:align", align: Align): void;
}

const props = withDefaults(defineProps<AlignConfigProps>(), {
  align: Align.Start,
});

const emits = defineEmits<AlignConfigEmits>();

const alignConfigs = [
  {
    icon: AlignLeftOutlined,
    align: Align.Start,
  },
  {
    icon: AlignCenterOutlined,
    align: Align.Center,
  },
  {
    icon: AlignRightOutlined,
    align: Align.End,
  },
];

const handleChange = (e: RadioChangeEvent) => {
  emits("update:align", e.target.value);
};
</script>

<template>
  <div>
    <a-radio-group :value="props.align" @change="handleChange">
      <a-radio-button
        v-for="alignConfig in alignConfigs"
        :value="alignConfig.align"
        :key="alignConfig.align"
      >
        <component :is="alignConfig.icon" />
      </a-radio-button>
    </a-radio-group>
  </div>
</template>

<style lang="less" scoped></style>
