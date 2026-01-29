package org.rti.tangerineclientapp;

import android.content.Intent;
import android.net.Uri;
import android.nfc.Tag;
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
//    if(intent == null) return;
    String url = intent.getDataString();
    if (url != null) {
      Log.d(TAG, "handleDeepLink: " + url);

      PluginHandle handle = bridge.getPlugin("UserProcessor");

      if (handle != null) {
        Log.d(TAG, "handleDeepLink: handle is not null");
        UserProcessorPlugin plugin = (UserProcessorPlugin) handle.getInstance();
        Log.d(TAG, "getUserData: currIntent is not null002");

        String finalUrl = getUserData(intent, "https://tangerinestaging.ustadmobile.com/");
        JSObject data = new JSObject();
        data.put("url", finalUrl);
        Log.d(TAG, "handleDeepLink: " + finalUrl);
        plugin.sendUserDataToWeb(data);
      } else {
        Log.d(TAG, "handleDeepLink: handle is null");
      }
    }
  }

  private String getUserData(Intent currIntent, String baseUrl) {
    if (currIntent == null) {
      Log.w(TAG, "getUserData: intent is null");
      return null;
    }

    Log.d(TAG, "getUserData: currIntent is not null");

    Uri data = currIntent.getData();
    Log.d(TAG, "getUserData " + data.toString());
    if (data == null) return null;

    String endpoint = data.getQueryParameter("endpoint");
    String auth = data.getQueryParameter("auth");
    String username = data.getQueryParameter("username");
    String mbox = data.getQueryParameter("mbox");


    if (isNullOrEmpty(username)
      || isNullOrEmpty(mbox)
      || isNullOrEmpty(endpoint)
      || isNullOrEmpty(auth)) {

      Log.w(TAG, "getUserData: missing required xAPI data");
      Log.w(TAG, "username=" + username);
      Log.w(TAG, "mbox=" + mbox);
      Log.w(TAG, "endpoint=" + endpoint);
      Log.w(TAG, "auth=" + auth);

      return null;
    }

    try {
      // Create objects ONLY after validation
      Actor actor = new Actor(username, mbox);
      XApiConfig config = new XApiConfig(endpoint, auth, actor);

      String encodedActor = UserProcessorPlugin.encodeActor(actor);

      Log.d(TAG, "encodedActor=" + encodedActor);

      String finalUrl =
        baseUrl +
          "?endpoint=" + URLEncoder.encode(config.getEndpoint(), StandardCharsets.UTF_8) +
          "&auth=" + URLEncoder.encode(config.getAuth(), StandardCharsets.UTF_8) +
          "&actor=" + encodedActor;

      return finalUrl;

    } catch (Exception e) {
      Log.e(TAG, "getUserData: failed to build URL", e);
      return null;
    }
  }

  private boolean isNullOrEmpty(String value) {
    return value == null || value.trim().isEmpty();
  }
}
