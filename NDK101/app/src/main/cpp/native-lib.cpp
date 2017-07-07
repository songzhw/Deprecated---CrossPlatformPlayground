#include <jni.h>
#include <string>
#include <map>
#include <android/log.h>
using namespace std;

#define logd(...) __android_log_print(ANDROID_LOG_DEBUG, "szw", __VA_ARGS__)

map<int, jobject> player;

extern "C"
JNIEXPORT jstring JNICALL
Java_ca_six_ndk101_MainActivity_stringFromJNI(
        JNIEnv* env,
        jobject /* this */) {
    std::string hello = "Hello from C++";
    return env->NewStringUTF(hello.c_str());
}

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void* reserved){
    logd("native onLoad()");
    return JNI_VERSION_1_6;
}

extern "C" JNIEXPORT jobject JNICALL
Java_ca_six_ndk101_MainActivity_getValue(JNIEnv *env, jobject instance, jint key) {
    return player[key];
}

extern "C" JNIEXPORT void JNICALL
Java_ca_six_ndk101_MainActivity_setValue(JNIEnv *env, jobject instance, jint key, jobject value) {
    jobject globalPlayer = env->NewGlobalRef(value);
    if(globalPlayer == NULL){
        return;
    }

    player[key] = globalPlayer;

}
