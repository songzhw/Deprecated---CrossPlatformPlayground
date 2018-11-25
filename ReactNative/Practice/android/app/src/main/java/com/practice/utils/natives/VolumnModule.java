package com.practice.utils.natives;

import android.content.Context;
import android.media.AudioManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class VolumnModule extends ReactContextBaseJavaModule {
    private AudioManager audio;

    public VolumnModule(ReactApplicationContext reactContext) {
        super(reactContext);
        audio = (AudioManager) reactContext.getSystemService(Context.AUDIO_SERVICE);
    }

    @Override
    public String getName() {
        return "Module_Volumn";
    }

    @ReactMethod
    public void getSystemVolumn(Callback callback) {
        int currentVolumn = audio.getStreamVolume(AudioManager.STREAM_MUSIC);
        int maxVolumn = audio.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
        float percent = currentVolumn * 1.0f / maxVolumn;
        callback.invoke(null, percent);
    }
}
