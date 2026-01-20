package org.rti.tangerineclientapp;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginHandle;

public class MainActivity extends BridgeActivity {
  private static final String TAG = "Main001";

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    registerPlugin(UserProcessorPlugin.class);
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

      PluginHandle handle = bridge.getPlugin("UserProcessor");

      if (handle != null) {
        Log.d(TAG, "handleDeepLink: handle is not null");
        UserProcessorPlugin plugin = (UserProcessorPlugin) handle.getInstance();
        JSObject data = new JSObject();
        data.put("url", url);
        plugin.sendUserDataToWeb(data);
      } else {
        Log.d(TAG, "handleDeepLink: handle is null");
      }
    }
  }
}
