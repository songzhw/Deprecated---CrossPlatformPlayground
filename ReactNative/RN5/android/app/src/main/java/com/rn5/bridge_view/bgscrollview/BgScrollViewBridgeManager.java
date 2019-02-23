package com.rn5.bridge_view.bgscrollview;

import android.graphics.Color;
import android.support.annotation.ColorInt;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

public class BgScrollViewBridgeManager extends ViewGroupManager<BgScrollView> {
    public static final String BG_SCROLL_VIEW = "BgScrollView";

    @Override
    public String getName() {
        return BG_SCROLL_VIEW;
    }

    @Override
    protected BgScrollView createViewInstance(ThemedReactContext reactContext) {
        return new BgScrollView(reactContext);
    }

    @ReactProp(name="bgColor", defaultInt = Color.WHITE)
    public void setBgColor(BgScrollView view, @ColorInt int color){
        view.setBgColor(color);
    }

}
