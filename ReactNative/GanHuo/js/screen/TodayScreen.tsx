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
      <Text style={styles.sectionHeader}> {section.key} </Text>
    )
  }

  renderItem = ({item, index, section}: { item: any, index: number, section: any }) => {
    if (item.type === Category.beauty) {
      return (
        <TouchableOpacity onPress={() => this.onPressBeauty(item.url)}>
          <Image source={{uri: item.url}} resizeMode='cover' style={{height: 200, backgroundColor: 'red'}}/>
        </TouchableOpacity>)
    } else if (item.type === Category.video) {
      return (
        <TouchableOpacity onPress={() => this.onPressVideo(item.url)}>
          {this.renderTextItem(item)}
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => this.onPressTextItem(item.url)}>
          {this.renderTextItem(item)}
        </TouchableOpacity>
      )
    }

  }


  renderTextItem = (item: any) => {
    return (
      <TouchableOpacity onPress={() => this.onPressTextItem(item.url, item.descr)}>
        <Text style={styles.itemTitle}> {item.desc} </Text>
        <Text style={styles.itemDate}>{item.createdAt}</Text>
      </TouchableOpacity>
    )
  }


  onPressBeauty = (url: string) => {
    this.props.navigation.navigate('BeautyDetailScreen', {img: url})
  }

  onPressVideo = (url: string) => {
    this.props.navigation.navigate("VideoScreen", {video: url})
  }

  onPressTextItem = (url: string, title: string) => {
    this.props.navigation.navigate("WebDetailScreen", {url: url, title: title})
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
  sectionHeader: {
    fontSize: 24,
    color: "#1a237e"
  },
  sectionDivider: {
    backgroundColor: '#880e4f',
    height: 1
  },
  itemTitle: {
    fontSize: 17,
    height: 46,
    color: '#1e1e1e'
  },
  itemDate: {
    fontSize: 13,
    alignSelf: 'flex-end'
  }
})

export default TodayScreen