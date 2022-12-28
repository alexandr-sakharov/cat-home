import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// @ts-ignore
import { resolve } from 'path'
import vitePluginImp from 'vite-plugin-imp'

// @ts-ignore
const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        parserOpts: {
          plugins: ['decorators-legacy', 'classProperties']
        }
      }
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    svgr()

  ],
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "./src"),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 8082,
    open: false,
    cors: true,
  },
  build: {
    outDir: 'dist',
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#4384c5',
        },
        javascriptEnabled: true,
      },
    },
  },
})
