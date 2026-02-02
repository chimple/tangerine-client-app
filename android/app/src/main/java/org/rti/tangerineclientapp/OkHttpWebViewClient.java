package org.rti.tangerineclientapp.webview;

import android.net.Uri;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.rti.tangerineclientapp.utils.NetworkUtils;

import java.util.Map;

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

    if (!"http".equals(scheme) && !"https".equals(scheme)) {
      return super.shouldInterceptRequest(view, request);
    }

    try {
      Request.Builder builder = new Request.Builder()
        .url(uri.toString());

      // Forward headers (VERY IMPORTANT)
      for (Map.Entry<String, String> h : request.getRequestHeaders().entrySet()) {
        builder.header(h.getKey(), h.getValue());
      }

      // Handle offline mode
      if (!NetworkUtils.isOnline(view.getContext())) {
        builder.header(
          "Cache-Control",
          "only-if-cached, max-stale=31536000"
        );
      }

      Response response = client.newCall(builder.build()).execute();

      if (!response.isSuccessful()) {
        return null;
      }

      String contentType = response.header("Content-Type", "text/plain");
        assert contentType != null;
        String mime = contentType.split(";")[0];
      String encoding = "utf-8";

        assert response.body() != null;
        return new WebResourceResponse(
        mime,
        encoding,
        response.body().byteStream()
      );

    } catch (Exception e) {
      return null;
    }
  }

}
