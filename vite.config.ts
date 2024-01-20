import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [glsl()],
  base: "/dl-website-s24/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        dlday: resolve(__dirname, "pages/dlday/index.html"),
      },
    },
  }
});
