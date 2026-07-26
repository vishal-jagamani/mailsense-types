import { defineConfig } from 'tsup';

export default defineConfig({
    entry: [
        'src/index.ts',
        'src/common/index.ts',
        'src/accounts/index.ts',
        'src/emails/index.ts',
        'src/folders/index.ts',
        'src/user/index.ts',
        'src/providers/index.ts',
        'src/events/index.ts',
        'src/workers/index.ts',
    ],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: false,
});
