import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project URL: https://<user>.github.io/<repo>/
// Repository name: nutrue
export default defineConfig({
  plugins: [react()],
  base: "/nutrue/",
});
