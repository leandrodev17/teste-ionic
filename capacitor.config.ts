import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'teste_ionic',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '455411327750-f6a7e2a0msj77bk3nj7nb5srab77j5c6.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
