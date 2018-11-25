import {NativeModules} from 'react-native'

export const ScreenAwakeModule = NativeModules.Module_ScreenAwake

export const getSystemVolumn = (callback) => {
  NativeModules.Module_Volumn.getSystemVolumn(callback)
}