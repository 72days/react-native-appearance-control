package com.appearancecontrol;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;

abstract class AppearanceControlSpec extends ReactContextBaseJavaModule {
  AppearanceControlSpec(ReactApplicationContext context) {
    super(context);
  }

  public abstract void setAppearanceDark(Promise promise);
  public abstract void setAppearanceLight(Promise promise);
  public abstract void setAppearanceSystem(Promise promise);
}
