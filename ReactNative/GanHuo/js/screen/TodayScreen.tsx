import React, {Component} from 'react'
import {View, StyleSheet, Text, SectionList, Image, TouchableOpacity} from 'react-native'
import {INavigationProps, IReduxProps} from "../core/CoreProps";
import {Category} from "../core/httpEngine";

interface Props extends IReduxProps, INavigationProps {
  data: any[]
}

class TodayScreen extends Component<Props> {

  render() {
    return (
      <View>
        <SectionList
          keyExtractor={(item, index) => item._id}
          sections={this.props.data}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectioHeader}
          ItemSeparatorComponent={() => <View style={styles.itemDivider}/>}
          SectionSeparatorComponent={() => <View style={styles.sectionDivider}/>}
        />
      </View>
    )
  }

  renderSectioHeader = ({section}: { section: any }) => {
    return (
      <Text style={{fontSize: 40}}> {section.key} </Text>
    )
  }

  renderItem = ({item, index, section}: { item: any, index: number, section: any }) => {

    if (item.type === Category.beauty) {
      return (
        <TouchableOpacity onPress={() => this.onPressBeauty(item.url)}>
          <Image source={{uri: item.url}} resizeMode='cover' style={{height: 200, backgroundColor: 'red'}}/>
        </TouchableOpacity>)
    } else {
      return (<Text>{item.desc}</Text>)
    }

  }

  onPressBeauty = (url: string)=> {
    this.props.navigation.navigate('BeautyDetailScreen', {img: url})
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  itemDivider: {
    backgroundColor: '#1e1e1e',
    height: StyleSheet.hairlineWidth
  },
  sectionDivider: {
    backgroundColor: '#880e4f',
    height: 1
  }
})

export default TodayScreen