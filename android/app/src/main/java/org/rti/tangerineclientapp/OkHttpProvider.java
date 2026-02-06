package org.rti.tangerineclientapp.webview;

import android.content.Context;

import org.rti.tangerineclientapp.utils.NetworkUtils;

import java.io.File;

import okhttp3.Cache;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class OkHttpProvider {

  public static OkHttpClient create(Context context) {
    File cacheDir = new File(context.getCacheDir(), "webview_http_cache");

    Cache cache = new Cache(
      cacheDir,
      100L * 1024L * 1024L // 100 MB
    );

    return new OkHttpClient.Builder()
      .cache(cache)
      // this to force cache in disk
      .addNetworkInterceptor(chain -> {
        Response response = chain.proceed(chain.request());
        return response.newBuilder()
          .header("Cache-Control", "public, max-age=31536000")
          .build();
      })

      // this serve from disk only if online
      .addInterceptor(chain -> {
        Request request = chain.request();
        if (!NetworkUtils.isOnline(context)) {
          request = request.newBuilder()
            .header(
              "Cache-Control",
              "only-if-cached, max-stale=31536000"
            )
            .build();
        }
        return chain.proceed(request);
      })

      .build();
  }
}
