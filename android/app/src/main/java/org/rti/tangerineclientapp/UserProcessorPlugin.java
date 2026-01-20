package org.rti.tangerineclientapp;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;


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
}
