import React from 'react'
import { AsyncStorage } from 'react-native'

export default class Storage200 {
      static set(key, value) {
            return AsyncStorage.setItem(key, value)
      }
      static get(key) {
            return AsyncStorage.getItem(key)
      }

      static has(key) {
            return AsyncStorage.getItem(key)
                  .then(v => {
                        if (v === null){
                              return false
                        }
                        return true
                  })
      }
}