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

  public static String getDummyUser() {
    //Creating an Actor object
    return "https://tangerine.lrs.io/xapi?endpoint=https://tangerine.lrs.io/xapi&auth=chimp:chimpoo&actor=%7B%22name%22%3A%22john%22%2C%22mbox%22%3A%22mailto:tincan@scorm.com%2";
  }
}
