import path, { resolve } from "path"
import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

export default defineConfig({
  // css: {
  //   modules: {
  //     generateScopedName: '[name]_[local]_[hash:base64:5]',
  //   },
  // },
  resolve: {
    alias: {
      // "@/": resolve(__dirname, "./src"),
      // "@/": resolve(__dirname, "/src"),
      "@": resolve(__dirname, "/src"),
      // "@/lib": resolve(__dirname, "./src/lib"),
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src'),
      // entry: path.resolve(__dirname, '/src'),
      // entry: path.resolve(__dirname, '../src'),
      // entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
      cssFileName: 'index',
    },
    // rollupOptions: {
      // external: ['@/components/ui/input'],
      // external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
      // output: {
      //   globals: {
      //     react: 'React',
      //     'react/jsx-runtime': 'react/jsx-runtime',
      //     'react-dom': 'ReactDOM',
      //     tailwindcss: 'tailwindcss',
      //   },
      // },
    // },
  },
})

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
