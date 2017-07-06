#include <jni.h>
#include <string>
#include <map>
#include <android/log.h>
using namespace std;

// 注意: 全局变量只能声明,不能赋值. 所以赋值语句要写在JNI_OnLoad()里面去
map<int, string> player;

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
    player[23] = "Jorden";
    player[33] = "Kobe";
    return JNI_VERSION_1_6;
}


extern "C"
JNIEXPORT jstring JNICALL
Java_ca_six_ndk101_MainActivity_getValue(
    JNIEnv* env, jobject /* this */, jint key) {
    char* chars = new char[50];
    sprintf(chars, "a key from %d -> %s", key,  player[key].c_str());
    return env->NewStringUTF(chars);
}