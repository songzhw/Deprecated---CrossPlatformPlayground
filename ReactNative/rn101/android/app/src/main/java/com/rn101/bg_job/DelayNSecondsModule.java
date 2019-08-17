package com.rn101.bg_job;

import android.os.Handler;
import android.os.Looper;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class DelayNSecondsModule extends ReactContextBaseJavaModule {
    private Handler handler;

    public DelayNSecondsModule(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);
        handler = new Handler(Looper.getMainLooper());
    }

    @Nonnull
    @Override
    public String getName() {
        return "NativeDelayFiveSeconds";
    }

    @ReactMethod
    public void start(int milliSeconds, Callback timeout) {
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                timeout.invoke("time out -- from Native");
            }
        }, milliSeconds);
    }
}
