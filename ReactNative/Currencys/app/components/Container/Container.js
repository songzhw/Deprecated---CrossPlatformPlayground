import React from 'react'
import PropTypes from 'prop-types' // no longer belong to the 'react' framework
import { View } from 'react-native'
import styles from './styles'

const Container = ({ children }) => (
  <View style={styles.Container}>{children}</View>
)

Container.propTypes = {
  children: PropTypes.element,
}

export default Container
