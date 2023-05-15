/// <reference types="vitest" />
import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import graphqlLoader from 'vite-plugin-graphql-loader';
import mkcert from 'vite-plugin-mkcert';
import * as path from 'path';

const plugins: PluginOption[] = [
  graphqlLoader(),
  react(),
  viteTsConfigPaths({
    root: '../../',
  }),
  mkcert({
    savePath: path.join(process.cwd(), '.mkcert-ssh-cert'),
  }),
];

export default defineConfig({
  cacheDir: '../../node_modules/.vite/brewbox-frontend',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins,

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
