package org.rti.tangerineclientapp;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginHandle;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

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

        String finalUrl = getUserData();
        JSObject data = new JSObject();
        data.put("url", finalUrl);

        plugin.sendUserDataToWeb(data);
      } else {
        Log.d(TAG, "handleDeepLink: handle is null");
      }
    }
  }

  private String getUserData() {
    String baseUrl = getIntent().getDataString();
    String finalUrl = baseUrl;

    Intent currIntent = getIntent();

    if (currIntent != null) {
      //Creating an Actor object
      String userName = currIntent.getStringExtra("username");
      String mbox = currIntent.getStringExtra("mbox");
      Actor actor = new Actor(userName, mbox);

      //Creating an XApiConfig object
      String endpoint = currIntent.getStringExtra("endpoint");
      String auth = currIntent.getStringExtra("auth");
      XApiConfig config = new XApiConfig(endpoint, auth, actor);

      String encodedActor = UserProcessorPlugin.encodeActor(actor);

      finalUrl = baseUrl +
                        "?endpoint=" + URLEncoder.encode(config.getEndpoint(), StandardCharsets.UTF_8) +
                        "&auth=" + URLEncoder.encode(config.getAuth(), StandardCharsets.UTF_8) +
                        "&actor" + encodedActor;

      return finalUrl;
    }
    else if(finalUrl.equals(baseUrl)) {
      Log.d(TAG, "getUserData: currIntent is null");

      return null;
    }

    return null;
  }
}
