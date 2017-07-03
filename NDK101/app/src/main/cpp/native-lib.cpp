#include <jni.h>
#include <string>
#include <android/log.h>
#include "ItemHelper.h"

static ItemHelper helper = ItemHelper();

extern "C" jstring Java_ca_six_ndk101_MainActivity_stringFromJNI(
    JNIEnv *env, jobject /* this */) {
    __android_log_print(ANDROID_LOG_ERROR, "TRACKERS", "%s", "I'm cpp~");
    std::string hello = "Hello from C++";
    return env->NewStringUTF(hello.c_str());
}

extern "C" jint Java_ca_six_ndk101_MainActivity_getId
    (JNIEnv *env, jobject thisObj, jstring str) {
    const char *cstr = env->GetStringUTFChars(str, 0);
    std::string key(cstr);

    env->ReleaseStringUTFChars(str, cstr);
    env->DeleteGlobalRef(str);
    return helper.data[key];
}

extern "C" void Java_ca_six_ndk101_MainActivity_setId
    (JNIEnv *env, jobject thisObj, jstring str, jint id) {
    const char *cstr = env->GetStringUTFChars(str, 0);
    std::string key(cstr);

    env->ReleaseStringUTFChars(str, cstr);
    env->DeleteGlobalRef(str);

    helper.data[key] = id;
}