package org.rti.tangerineclientapp.webview;

import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.ProgressBar;

public class ProgressWebChromeClient extends WebChromeClient {

  private final ProgressBar progressBar;

  public ProgressWebChromeClient(ProgressBar progressBar) {
    this.progressBar = progressBar;
  }

  @Override
  public void onProgressChanged(WebView view, int newProgress) {
    if (newProgress < 100) {
      progressBar.setVisibility(View.VISIBLE);
      progressBar.setProgress(newProgress);
    } else {
      progressBar.setVisibility(View.GONE);
    }
  }
}
