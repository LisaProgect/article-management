/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default ({ mode }: unknown): unknown => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return defineConfig({
    server: {
      host: true,
      port: parseInt(process.env["VITE_PORT"] ?? "3001"),
    },
    assetsInclude: ["**/*.xlsx", "**/*.xls", "**/*.csv"],
    preview: {
      port: parseInt(process.env["VITE_PORT"] ?? "3002"),
    },
    build: {
      target: "es2020",
    },
    plugins: [
      react(),
      eslint({
        fix: true,
        lintOnStart: true,
      }),
    ],
  });
};
