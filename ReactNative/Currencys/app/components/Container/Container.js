import PropTypes from 'prop-types' // no longer belong to the 'react' framework
import React from 'react'
import { View } from 'react-native'
import styles from './styles'

const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)

Container.propTypes = {
  children: PropTypes.any,
}

export default Container
