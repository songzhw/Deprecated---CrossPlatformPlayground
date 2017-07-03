#include <jni.h>
#include <string>
#include <android/log.h>

extern "C" jstring Java_ca_six_ndk101_MainActivity_stringFromJNI(
        JNIEnv* env, jobject /* this */) {
    __android_log_print(ANDROID_LOG_ERROR, "TRACKERS", "%s", "I'm cpp~");
    std::string hello = "Hello from C++";
    return env->NewStringUTF(hello.c_str());
}

extern "C" jint Java_ca_six_ndk101_MainActivity_getId
(JNIEnv *, jobject, jstring) {
    return 23;
}

extern "C" void Java_ca_six_ndk101_MainActivity_setId
(JNIEnv *, jobject, jstring, jint) {

}