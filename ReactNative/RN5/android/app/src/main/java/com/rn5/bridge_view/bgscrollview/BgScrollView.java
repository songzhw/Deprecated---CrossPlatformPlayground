package com.rn5.bridge_view.bgscrollview;

import android.content.Context;
import android.support.annotation.ColorInt;
import android.widget.LinearLayout;

/*
1. ScrollView <- FrameLayout <- ViewGroup
2.
 */
public class BgScrollView extends LinearLayout {
    public BgScrollView(Context context) {
        super(context);
    }

    public void setBgColor(@ColorInt int color) {
        System.out.println("szw BgScrollView.setBgColor(" + color + ")");
        this.setBackgroundColor(color);
    }

}
