import { defineConfig } from "tsup";

export const config = defineConfig((options) => {
	return {
		entry: ["./src/index.tsx"],
		outDir: "./build/",
		minify: options.watch ? false : "terser",
		dts: true,
		sourcemap: true,
		clean: true,
		treeshake: "recommended",
		format: ["esm", "cjs"],
		target: "es2020",
		legacyOutput: true,
		esbuildOptions: (opt) => {
			opt.bundle = false;
		},
	};
});
