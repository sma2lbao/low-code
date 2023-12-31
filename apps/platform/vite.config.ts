import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: [".js", ".ts", ".vue"],
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
      },
    },
  },
  plugins: [
    vue(),
    Components({
      dts: true,
      resolvers: [AntDesignVueResolver({ importStyle: false })],
    }),
  ],
});
