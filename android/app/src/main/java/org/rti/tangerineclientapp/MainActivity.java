package org.rti.tangerineclientapp;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginHandle;

// JSON Imports
import org.json.JSONArray;
import org.json.JSONObject;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
// Regex Imports for parsing IDs
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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
        UserProcessorPlugin plugin = (UserProcessorPlugin) handle.getInstance();
        JSObject data = new JSObject();
        Uri uri = intent.getData();

        // ONLY handle launch data with activity_id
        if (uri != null && uri.getQueryParameter("activity_id") != null) {
          Log.d(TAG, "Processing Launch Data");
          String activityId = uri.getQueryParameter("activity_id");
          String endpoint = uri.getQueryParameter("endpoint");
          String auth = uri.getQueryParameter("auth");
          String actorJsonStr = uri.getQueryParameter("actor");

          Log.d(TAG, "activity_id: " + activityId);
          Log.d(TAG, "endpoint: " + endpoint);
          Log.d(TAG, "auth: " + auth);
          Log.d(TAG, "actor: " + actorJsonStr);

          String name = "";
          String mbox = "";

          // Parse Actor JSON handling both Arrays ["Val"] and Strings "Val"
          if (actorJsonStr != null && !actorJsonStr.trim().isEmpty()) {
            try {
              JSONObject jsonActor = new JSONObject(actorJsonStr);

              if (jsonActor.has("name")) {
                Object nameObj = jsonActor.get("name");
                if (nameObj instanceof JSONArray) {
                  name = ((JSONArray) nameObj).getString(0);
                } else {
                  name = nameObj.toString();
                }
              }

              if (jsonActor.has("mbox")) {
                Object mboxObj = jsonActor.get("mbox");
                if (mboxObj instanceof JSONArray) {
                  mbox = ((JSONArray) mboxObj).getString(0);
                } else {
                  mbox = mboxObj.toString();
                }
              }
            } catch (Exception e) {
              Log.e(TAG, "Failed to parse actor JSON", e);
            }
          }

          Log.d(TAG, "Parsed name: " + name);
          Log.d(TAG, "Parsed mbox: " + mbox);

          // Extract groupId and formId from activity_id
          String groupId = "";
          String formId = "";
          if (activityId != null) {
            Pattern pattern = Pattern.compile("online-survey-apps/([^/]+)/([^/]+)");
            Matcher matcher = pattern.matcher(activityId);
            if (matcher.find()) {
              groupId = matcher.group(1);
              formId = matcher.group(2);
              Log.d(TAG, "Extracted groupId: " + groupId);
              Log.d(TAG, "Extracted formId: " + formId);
            }
          }

          // Send data to web layer
          data.put("type", "survey");
          data.put("groupId", groupId);
          data.put("formId", formId);
          data.put("name", name);
          data.put("mbox", mbox);
          data.put("endpoint", endpoint);
          data.put("auth", auth);
          data.put("activityId", activityId);

          plugin.sendUserDataToWeb(data);
        } else {
          Log.w(TAG, "No activity_id found in URL, ignoring deep link");
        }

      } else {
        Log.d(TAG, "handleDeepLink: handle is null");
      }
    }
  }

  private boolean isNullOrEmpty(String value) {
    return value == null || value.trim().isEmpty();
  }
}
