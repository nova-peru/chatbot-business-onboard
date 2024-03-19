import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      "process.env.API_URL": JSON.stringify(env.API_URL),
      "process.env.MIXPANEL_TOKEN": JSON.stringify(env.MIXPANEL_TOKEN),
    },
    plugins: [react()],
    base: "/chatbot-business-onboard/",
  };
});
