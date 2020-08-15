package com.rn101.ui

import android.view.ViewGroup
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManager
import com.rn101.R

class RippleBgViewManager(val ctx: ReactApplicationContext) : SimpleViewManager<RippleBgView>() {

    // JS中使用view名字就叫这个
    override fun getName() = "RippleBgView"

    override fun createViewInstance(reactContext: ThemedReactContext): RippleBgView {
        val view = RippleBgView(ctx)
        view.setImageResource(R.mipmap.ic_launcher_round)
        return view
    }

}

class RippleBgPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> = emptyList()

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        val list: List<ViewManager<*, *>> = arrayListOf(RippleBgViewManager(reactContext))
        return list
    }
}