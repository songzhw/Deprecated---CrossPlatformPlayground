package com.rn101.ui

import android.widget.ImageView
import androidx.annotation.Nullable
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManager
import com.facebook.react.uimanager.annotations.ReactProp
import com.rn101.R

class RippleBgViewManager(val ctx: ReactApplicationContext) : SimpleViewManager<RippleBgView>() {

    // JS中使用view名字就叫这个
    override fun getName() = "RippleBgView"

    override fun getConstants(): MutableMap<String, Any> {
        val constants = HashMap<String, Any>()
        constants["fitXY"] = ImageView.ScaleType.FIT_XY
        constants["centerCrop"] = ImageView.ScaleType.CENTER_CROP
        return constants
    }

    override fun createViewInstance(reactContext: ThemedReactContext): RippleBgView {
        val view = RippleBgView(ctx)
        view.setImageResource(R.mipmap.ic_launcher_round)
        return view
    }

    @ReactProp(name = "stretchMode")
    fun setStretchMode(view: RippleBgView, @Nullable scaleType: String) {
        val type: ImageView.ScaleType = constants[scaleType] as ImageView.ScaleType? ?: ImageView.ScaleType.FIT_START;
        view.scaleType = type
    }

}

class RippleBgPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> = emptyList()

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        val list: List<ViewManager<*, *>> = arrayListOf(RippleBgViewManager(reactContext))
        return list
    }
}