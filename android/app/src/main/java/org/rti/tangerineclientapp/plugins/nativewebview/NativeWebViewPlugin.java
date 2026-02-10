package org.rti.tangerineclientapp;


import android.content.Intent;
import android.util.Log;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import org.json.JSONException;
import org.json.JSONObject;

@CapacitorPlugin(name = "NativeWebView")
public class NativeWebViewPlugin extends Plugin {

  private static final int SURVEY_REQ = 2001;

  @PluginMethod
  public void open(PluginCall call) {
    String data = call.getString("data");
    if (data != null) {
      try {
        JSONObject obj = new JSONObject(data);
        String formUrl = obj.getString("formUrl");
        String currentUrl = obj.getString("currentUrl");

        Intent i = new Intent(getContext(), WebViewActivity.class);
        i.putExtra("formUrl", formUrl);
        i.putExtra("currentUrl", currentUrl);

        getActivity().startActivityForResult(i, SURVEY_REQ);
      } catch (JSONException e) {
        Log.e("WEB_URL", "Invalid JSON", e);
      }
    }}}
