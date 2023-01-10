package com.appearancecontrol;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatDelegate;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

public class AppearanceControlModule extends AppearanceControlSpec {
  public static final String NAME = "AppearanceControl";

  AppearanceControlModule(ReactApplicationContext context) {
    super(context);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  @ReactMethod
  public void setAppearanceDark(Promise promise) {
    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES);
    promise.resolve(null);
  }

  @ReactMethod
  public void setAppearanceLight(Promise promise) {
    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO);
    promise.resolve(null);
  }

  @ReactMethod
  public void setAppearanceSystem(Promise promise) {
    AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM);
    promise.resolve(null);
  }
}
