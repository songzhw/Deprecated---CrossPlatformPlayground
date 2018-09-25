import React, { Component } from 'react'
import { Image, StyleSheet, Text, View,  Button, Alert } from 'react-native'

export default class DetailScreen extends Component {
      static navigationOptions = {
            title: 'Details',
            headerRight: (
                  <Button title="Info" color="#0000"
                        onPress={() => Alert.alert('information~')} />
            )
      }

      render() {
            const { navigation } = this.props
            const id = navigation.getParam("id", "NO-ID")
            const name = navigation.getParam("name", "NULL Name")

            return (
                  <View style={{ flex: 1 }}>
                        <Text> Detail page</Text>
                        <Text> id: {id}, name : {name}</Text>
                        <Button title="go back" onPress={() => this.props.navigation.goBack()} />
                        <Button title="go to detail again"
                              onPress={() => {
                                    this.props.navigation.push('Details', {
                                          id: Math.floor(Math.random() * 100)
                                    })
                              }} />
                  </View>
            )
      }
}