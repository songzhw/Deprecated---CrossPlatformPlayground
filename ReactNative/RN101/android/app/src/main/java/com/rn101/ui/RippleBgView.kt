package com.rn101.ui

import android.animation.ValueAnimator
import android.annotation.SuppressLint
import android.content.Context
import android.graphics.Canvas
import android.graphics.Color
import android.graphics.Paint
import android.os.Handler
import android.os.Message
import android.util.AttributeSet
import android.view.animation.AccelerateDecelerateInterpolator
import android.view.animation.Animation
import androidx.appcompat.widget.AppCompatImageView

// this is a view for RN's native UI component
class RippleBgView @JvmOverloads constructor(
        context: Context, attrs: AttributeSet? = null, defStyleAttr: Int = 0
) : AppCompatImageView(context, attrs, defStyleAttr) {

    private var animator: ValueAnimator? = null

    private val paint: Paint
    private var centerX = 0f
    private var centerY = 0f

    init {
        paint = Paint(Paint.ANTI_ALIAS_FLAG)
        paint.color = Color.WHITE
        paint.style = Paint.Style.STROKE //不加这个, 那就是个初心圆
        paint.strokeWidth = 10f

        this.setBackgroundColor(Color.RED)
    }

    override fun onSizeChanged(w: Int, h: Int, oldw: Int, oldh: Int) {
        super.onSizeChanged(w, h, oldw, oldh)
        centerX = w / 2f
        centerY = h / 2f

        if (animator != null && animator!!.isRunning) {
            animator!!.cancel()
        }
        animator = ValueAnimator.ofFloat(100f, 1400f)
        animator!!.interpolator = AccelerateDecelerateInterpolator()
        animator!!.duration = 3000
        animator!!.repeatCount = Animation.INFINITE
        animator!!.start()
    }

    override fun onDraw(canvas: Canvas) {
        val radius = animator?.animatedValue as Float
        println("szw radius = $radius")
        canvas.drawCircle(centerX, centerY, radius, paint)
        handler.sendEmptyMessageDelayed(11, 30)
    }

    @SuppressLint("HandlerLeak")
    private val handler = object : Handler() {
        override fun handleMessage(msg: Message?) {
            invalidate()
        }
    }

    override fun onDetachedFromWindow() {
        super.onDetachedFromWindow()
        // If token is null, all callbacks and messages will be removed.
        handler.removeCallbacksAndMessages(null)
    }

    // =========== public methods ===========
    fun setBg(color: String) {
        val colorInt = Color.parseColor(color)
        this.setBackgroundColor(colorInt)
    }
}