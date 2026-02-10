import { registerPlugin } from '@capacitor/core';

export interface NativeWebViewPlugin {
  open(options: { data: string }): Promise<void>;
}

export const NativeWebView = registerPlugin<NativeWebViewPlugin>('NativeWebView', {
  android: () => import('./nativeWebViewAndroid').then(m => m.NativeWebView),
});
