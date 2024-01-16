import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "lib",
  format: "esm",
  splitting: true,
  clean: true,
  dts: true,
});
