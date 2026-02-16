package org.rti.tangerineclientapp;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;


@CapacitorPlugin(name = "UserProcessor")
public class UserProcessorPlugin extends Plugin {
  private static final String TAG = "UserProcessorPlugin";


//  Java -> Web
  public void sendUserDataToWeb(JSObject data) {
    Log.d(TAG, "sending data to web");
        notifyListeners("processUserData", data, true);
  }

//  Web -> Java
  @PluginMethod
  public void returnResult(PluginCall call) {
    JSObject result = call.getObject(("result"));
    handleProcessedResult(result);
    call.resolve();
  }

  private void handleProcessedResult(JSObject result) {
    Log.d("UserProcessorPlugin", "handleProcessedResult: " + result.toString());
  }

  public static String encodeActor(Actor actor) {
    String json = String.format(
      "{\"name\":\"%s\",\"mbox\":\"%s\"}",
      actor.getName(),
      actor.getMbox()
    );

    return URLEncoder.encode(json, StandardCharsets.UTF_8);
  }

  @PluginMethod
  public void getDummyUser(PluginCall call) {
    JSObject ret = new JSObject();
    ret.put("auth", "chimp:chimpoo");
    ret.put("endpoint", "https://tangerine.lrs.io/xapi");
    ret.put("name", "john");
    ret.put("mbox", "mailto:tincan@scorm.com");
    call.resolve(ret);
  }
}
