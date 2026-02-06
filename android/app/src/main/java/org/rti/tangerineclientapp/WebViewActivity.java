package org.rti.tangerineclientapp;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;
import android.widget.TextView;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

import okhttp3.OkHttpClient;
import org.rti.tangerineclientapp.webview.OkHttpProvider;
import org.rti.tangerineclientapp.webview.OkHttpWebViewClient;
import org.rti.tangerineclientapp.webview.ProgressWebChromeClient;

public class WebViewActivity extends Activity {

  private WebView webView;

  @SuppressLint("SetJavaScriptEnabled")
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_webview);
    View root = findViewById(R.id.root);
    RelativeLayout header = findViewById(R.id.header);
    webView = findViewById(R.id.surveyWebView);
    ImageView back = findViewById(R.id.back);
    ProgressBar progress = findViewById(R.id.progress);

    back.setOnClickListener(v -> {
      onBackPressed(); // manually call system back logic
    });


    // here this ViewCompat and Inset use to push activity below the header including status bar plus header height
    ViewCompat.setOnApplyWindowInsetsListener(root, (v, insets) -> {
      // get the height of the statusbar through inset
      int topInset = insets.getInsets(WindowInsetsCompat.Type.statusBars()).top;

      ViewGroup.LayoutParams lp = header.getLayoutParams();

      // 56dp header + status bar height convert 56dp header height to px
      int headerHeight = (int) (56 * getResources().getDisplayMetrics().density);

      lp.height = headerHeight + topInset;
      header.setLayoutParams(lp);

      header.setPadding(
              header.getPaddingLeft(),
              topInset,
              header.getPaddingRight(),
              header.getPaddingBottom()
      );

      return insets;
    });

    // webview config settings
    WebSettings settings = webView.getSettings();
    settings.setJavaScriptEnabled(true);
    settings.setDomStorageEnabled(true);
    settings.setAllowFileAccess(true);
    settings.setAllowContentAccess(true);
    settings.setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);

    OkHttpClient client = OkHttpProvider.create(this);
    webView.setWebViewClient(new OkHttpWebViewClient(client));
    webView.setWebChromeClient(new ProgressWebChromeClient(progress));

    String url = getIntent().getStringExtra("url");
    assert url != null;
    webView.loadUrl(url);
    injectBridge();
  }

  private void injectBridge() {
    webView.addJavascriptInterface(new Object() {
      @android.webkit.JavascriptInterface
      public void sendResult(String json) {
        Intent result = new Intent();
        result.putExtra("surveyResult", json);
        setResult(Activity.RESULT_OK, result);
        finish();
      }
    }, "AndroidSurveyBridge");
  }

  @Override
  public void onBackPressed() {
    if (webView.canGoBack()) webView.goBack();
    else finish();
  }
}
