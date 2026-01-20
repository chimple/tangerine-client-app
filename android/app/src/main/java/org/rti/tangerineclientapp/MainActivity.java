package org.rti.tangerineclientapp;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;


public class MainActivity extends BridgeActivity {
  private static final String TAG = "Main001";


  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    handleDeepLink(getIntent());
  }

  @Override
  protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    handleDeepLink(intent);
  }

  private void handleDeepLink(Intent intent) {
    String url = intent.getDataString();
    if (url != null) {
      Log.d(TAG, "handleDeepLink: " + url);
    }
  }
}
