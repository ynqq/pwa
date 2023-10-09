// import mkcert from "vite-plugin-mkcert";
import { defineConfig } from 'vite'
export default defineConfig({
  base: "./",
  server: {
    port: 4000,
    host: true,
  },
  build: {
    assetsInlineLimit: 0,
  }
//   plugins: [mkcert()],
});
