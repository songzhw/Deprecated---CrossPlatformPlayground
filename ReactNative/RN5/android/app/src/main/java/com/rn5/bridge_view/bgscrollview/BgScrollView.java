package com.rn5.bridge_view.bgscrollview;

import android.content.Context;
import android.support.annotation.ColorInt;
import android.util.AttributeSet;
import android.widget.ScrollView;

/*
1. ScrollView <- FrameLayout <- ViewGroup
2.
 */
public class BgScrollView extends ScrollView {
    public BgScrollView(Context context) {
        super(context);
    }

    public void setBgColor(@ColorInt int color) {
        System.out.println("szw BgScrollView.setBgColor(" + color + ")");
        this.setBackgroundColor(color);
    }

}
