import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import Terminal from "vite-plugin-terminal";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    tailwindcss(),
    Terminal({
      console: "terminal",
      output: ["terminal", "console"],
    }),
  ],
  server: {
    allowedHosts: ["herrenhaus.fschr.me"],
  },
});
