import { NativeWebView as Plugin } from './nativeWebView';

export const NativeWebView = {
  open(options: { data: string }): Promise<void> {
    return Plugin.open(options);
  }
};
