#include <jni.h>
#include <string>
#include <android/log.h>

extern "C"
JNIEXPORT jstring JNICALL
Java_ca_six_ndk101_MainActivity_stringFromJNI(
        JNIEnv* env,
        jobject /* this */) {
    std::string hello = "Hello from C++";
    return env->NewStringUTF(hello.c_str());
}

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void* reserved){
    __android_log_print(ANDROID_LOG_ERROR, "szw", "%s", "native onLoad()");
    return JNI_VERSION_1_6;
}

// 不知道何时被调用, 一直没看到相关日志
JNIEXPORT void JNICALL JNI_OnUnLoad(JavaVM* vm, void* reserved){
    __android_log_print(ANDROID_LOG_ERROR, "szw", "%s", "native onUnLoad()");
}