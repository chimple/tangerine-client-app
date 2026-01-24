package org.rti.tangerineclientapp;


import android.app.Application;

import android.os.Build;
import android.webkit.WebView;

public class SurveyApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
      String processName = Application.getProcessName();

      if (processName != null && processName.endsWith(":survey_process")) {
        WebView.setDataDirectorySuffix("survey");
      } else {
        WebView.setDataDirectorySuffix("main");
      }
    }
  }
}
