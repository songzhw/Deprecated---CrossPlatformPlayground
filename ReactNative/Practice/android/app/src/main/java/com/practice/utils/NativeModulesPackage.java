package com.practice.utils;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.practice.utils.natives.ScreenAwakeModule;
import com.practice.utils.natives.ImagePickerModule;
import com.practice.utils.natives.VolumnModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class NativeModulesPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> ret = new ArrayList<>();
        ret.add(new ScreenAwakeModule(reactContext));
        ret.add(new ImagePickerModule(reactContext));
        ret.add(new VolumnModule(reactContext));
        return ret;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
