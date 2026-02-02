import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.rti.tangerineclientapp',
  appName: 'Tangerine Client App',
  webDir: 'dist',
  server: {
    allowNavigation: ['tangerinestaging.ustadmobile.com'],
  },
};

export default config;
