package org.rti.tangerineclientapp;

import android.app.Activity;
import android.content.Intent;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "NativeWebView")
public class NativeWebViewPlugin extends Plugin {

  private static final int SURVEY_REQ = 2001;

  @PluginMethod
  public void open(PluginCall call) {
    String url = call.getString("url");

    Intent intent = new Intent(getContext(), WebViewActivity.class);
    intent.putExtra("url", url);

    getActivity().startActivityForResult(intent, SURVEY_REQ);
  }
}
