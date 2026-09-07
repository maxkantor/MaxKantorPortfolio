import { resolve } from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const generateConsultingRoute = () => ({
  name: 'generate-consulting-route',
  closeBundle() {
    const distDir = resolve(__dirname, 'dist');
    const consultingDir = resolve(distDir, 'consulting');
    const consultingHtml = resolve(distDir, 'consulting.html');
    const targetHtml = resolve(consultingDir, 'index.html');

    try {
      if (fs.existsSync(consultingHtml)) {
        if (!fs.existsSync(consultingDir)) {
          fs.mkdirSync(consultingDir, { recursive: true });
        }
        fs.copyFileSync(consultingHtml, targetHtml);
        console.log('✓ Generated dist/consulting/index.html for static hosting');
      }
    } catch (err) {
      console.warn('Could not copy consulting.html to consulting/index.html:', err);
    }
  },
});

export default defineConfig({
  plugins: [react(), generateConsultingRoute()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        consulting: resolve(__dirname, 'consulting.html'),
      },
    },
  },
});
