import { defineConfig, ConfigEnv, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({

//   plugins: [react()],
// });

export default defineConfig(({command, mode} : ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      port: Number(env.PORT),
    }
  }
});
