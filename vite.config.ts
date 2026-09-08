import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/fyntrack/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        contact: 'contact.html',
        privacy: 'privacy-policy.html',
        terms: 'terms.html',
        disclaimer: 'disclaimer.html',
        login: 'login.html',
      },
    },
  },
});
