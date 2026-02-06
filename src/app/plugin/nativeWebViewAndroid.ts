import { NativeWebView as Plugin } from './nativeWebView';

export const NativeWebView = {
  open(options: { url: string }) {
    return Plugin.open(options);
  }
};
