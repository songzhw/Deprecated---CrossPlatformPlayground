#include <jni.h>
#include <string>
#include <map>
#include <android/log.h>
using namespace std;

#define logd(...) __android_log_print(ANDROID_LOG_DEBUG, "szw", __VA_ARGS__)

map<int, jobject> player;

void throwNoSuchPlayerException(JNIEnv *env) {
    jclass exceptionClass = env->FindClass("ca/six/ndk101/model/NoSuchPlayerException");
    if (exceptionClass != NULL) {
        env->ThrowNew(exceptionClass, "error from c++");
    }
    env->DeleteLocalRef(exceptionClass);
}

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void* reserved){
    logd("native onLoad()");
    return JNI_VERSION_1_6;
}

extern "C" JNIEXPORT jobject JNICALL
Java_ca_six_ndk101_MainActivity_getValue(JNIEnv *env, jobject instance, jint key) {
    jobject ret =  player[key];
    if(ret == NULL){
        throwNoSuchPlayerException(env);
    }
    return ret;
}

extern "C" JNIEXPORT void JNICALL
Java_ca_six_ndk101_MainActivity_setValue(JNIEnv *env, jobject instance, jint key, jobject value) {
    jobject globalPlayer = env->NewGlobalRef(value);
    if(globalPlayer == NULL){
        return;
    }

    // get class, get methodId, callVoidMethod(obj);
    // 另一法 jclass c = (*env)->FindClass(env, "demo/DataAvailable");
    jclass playerClass = env->GetObjectClass(globalPlayer);
    jmethodID changeNumberMethod = env->GetMethodID(playerClass, "changeNumber", "(I)V");
    env->CallVoidMethod(globalPlayer, changeNumberMethod, key + 100);

    env->DeleteLocalRef(playerClass);

    player[key] = globalPlayer;

}
