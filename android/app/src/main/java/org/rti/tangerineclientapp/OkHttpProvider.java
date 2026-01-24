package org.rti.tangerineclientapp.webview;

import android.content.Context;

import java.io.File;

import okhttp3.Cache;
import okhttp3.OkHttpClient;

public class OkHttpProvider {

  public static OkHttpClient create(Context context) {
    File cacheDir = new File(context.getCacheDir(), "webview_http_cache");

    Cache cache = new Cache(
      cacheDir,
      50L * 1024L * 1024L // 50 MB
    );

    return new OkHttpClient.Builder()
      .cache(cache)
      .build();
  }
}
