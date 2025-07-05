import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && {
      name: 'configure-server',
      configureServer(server: { middlewares: { use: (arg0: (req: any, res: any, next: any) => void) => void; }; }) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/tasks') {
            res.setHeader('Access-Control-Allow-Origin', '*');
          }
          next();
        });
      },
    },   
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
