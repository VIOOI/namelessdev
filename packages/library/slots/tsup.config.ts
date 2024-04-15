import { defineConfig, type Options } from "tsup";

export default defineConfig((options) => {
	return {
		entry: ["./src/*.(tsx|ts)"],
		outDir: "./build/",
		// minify: options.watch ? false : "terser",
		minify: "terser",
		dts: true,
		sourcemap: true,
		clean: true,
		treeshake: "recommended",
		format: ["esm", "cjs"],
		target: "es2020",
		legacyOutput: true,
		esbuildOptions: (opt, context) => {
			opt.bundle = false;
		},
	};
});
