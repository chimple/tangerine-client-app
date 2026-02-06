package org.rti.tangerineclientapp;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    ArrayList<Class<? extends Plugin>> list = new ArrayList<>();
    list.add(org.rti.tangerineclientapp.NativeWebViewPlugin.class);
    registerPlugins(list);
    super.onCreate(savedInstanceState);
  }
}
