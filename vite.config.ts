import { defineConfig } from "vite"
import { resolve, join } from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// Define chrome as default browser for the dev server.
const opsys = process.platform
// windows
if (opsys === "win32") process.env.BROWSER = "chrome"
// macOS
if (opsys === "darwin") process.env.BROWSER = "/Applications/Google Chrome.app"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: resolve(import.meta.dirname, "dist"),
    sourcemap: true,
    minify: true,
    cssMinify: true,
  },
  resolve: {
    alias: {
      "@": resolve(join(import.meta.dirname, "src/")),
      "@api": resolve(join(import.meta.dirname, "src/api")),
      "@components": resolve(join(import.meta.dirname, "src/components")),
      "@contexts": resolve(join(import.meta.dirname, "src/contexts")),
      "@hooks": resolve(join(import.meta.dirname, "src/hooks")),
      "@providers": resolve(join(import.meta.dirname, "src/providers")),
      "@services": resolve(join(import.meta.dirname, "src/services")),
      "@store": resolve(join(import.meta.dirname, "src/store")),
      "@types": resolve(join(import.meta.dirname, "src/types")),
      "@utils": resolve(join(import.meta.dirname, "src/utils")),
    },
  },
  plugins: [react(), tailwindcss()],
})
