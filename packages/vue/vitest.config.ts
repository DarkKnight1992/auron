import { defineConfig, mergeConfig } from "vitest/config";
import base from "@auron/vitest/config";

export default mergeConfig(base, defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.ts"],
  },
}));
