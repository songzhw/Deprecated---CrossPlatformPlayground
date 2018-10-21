import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

const Icon = ({ visible, checkmark }) => {
  return <View style={styles.icon} />
}

Icon.propTypes = {
  visible: PropTypes.bool,
  checkmark: PropTypes.bool,
}

export default Icon
