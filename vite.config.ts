import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["**/*.stories.tsx", "**/*.mdx"],
      outDir: "dist/src",
      include: ["src"],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "yoso-ui",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: true,
  },
});
