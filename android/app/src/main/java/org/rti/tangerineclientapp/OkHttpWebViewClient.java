package org.rti.tangerineclientapp.webview;

import android.net.Uri;
import android.util.Log;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.InputStream;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class OkHttpWebViewClient extends WebViewClient {

  private final OkHttpClient client;
  private static final String TAG = "OKHTTP_WEBVIEW";

  public OkHttpWebViewClient(OkHttpClient client) {
    this.client = client;
  }

  @Override
  public WebResourceResponse shouldInterceptRequest(
    WebView view,
    WebResourceRequest request
  ) {
    Uri uri = request.getUrl();
    String scheme = uri.getScheme();

    if (scheme == null ||
      (!scheme.equals("http") && !scheme.equals("https"))) {
      Log.d(TAG, "Skipping non-http request: " + uri);
      return super.shouldInterceptRequest(view, request);
    }
    Log.d(TAG, "Intercepting: " + uri);

    try {
      Request okRequest = new Request.Builder()
        .url(uri.toString())
        .method(request.getMethod(), null)
        .build();

      Response response = client.newCall(okRequest).execute();
      Log.d("OKHTTP_CACHE",
        "Cache-Control: " + response.header("Cache-Control"));
      InputStream body = response.body().byteStream();

      String contentType = response.header("Content-Type", "text/plain");
      if (contentType.contains(";")) {
        contentType = contentType.split(";")[0];
      }
      String encoding =
        response.header("Content-Encoding", "utf-8");

      return new WebResourceResponse(
        contentType,
        encoding,
        body
      );

    } catch (Exception e) {
      return super.shouldInterceptRequest(view, request);
    }
  }
}
