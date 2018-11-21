package com.practice;

import android.app.Activity;
import android.view.WindowManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ScreenAwakeModule extends ReactContextBaseJavaModule {
    ReactApplicationContext reactContext;  //wraps Android Application  and CatalystInstance

    public ScreenAwakeModule(ReactApplicationContext reactContext){
        super(reactContext);
        this.reactContext = reactContext;
    }


    @Override
    public String getName() {
        return "Module_ScreenAwake";
    }

    @ReactMethod
    public void keepScreenAwake(){
        Activity activity = getCurrentActivity();
        activity.runOnUiThread(()-> {
            activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        });
    }

    @ReactMethod
    public void removeScreenAwake(){
        Activity activity = getCurrentActivity();
        activity.runOnUiThread(()-> {
            activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        });
    }
}
