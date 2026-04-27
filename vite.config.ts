import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Production (build + preview): /nutrue/ for GitHub Pages
// Development: / so http://localhost:5173/ works (no /nutrue/ subpath)
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/nutrue/" : "/",
  server: {
    open: true,
  },
}));
