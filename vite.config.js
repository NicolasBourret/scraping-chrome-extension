import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        popup: "popup/index.html",
        tab: "tab/index.html",
        content_script: "content_script/index.js",
        background: "background/index.js",
      },
      output: {
        // Créez un objet de sortie pour chaque entrée
        entryFileNames: ({ name }) => `${name}/index.js`,
        chunkFileNames: "index.js",
        assetFileNames: "[name][extname]",
      },
    },
  },
});
