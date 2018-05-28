import React, {Component} from 'react'
import {View, StyleSheet, Text, ListView, Dimensions, RefreshControl,ImageBackground} from 'react-native'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LayoutCell from './../components/LayoutCell'
import * as Constants from '../constants'

const {height, width} = Dimensions.get('window')

class AppLayouts extends Component {
  constructor (props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      ds: ds.cloneWithRows(props.data)
    }
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.data !== this.props.data) {
      this._updateData(nextProps.data)
    }
  }

  _updateData (data) {
    if (!this.props.isTabScrolling()) {
      this.setState({
        ds: this.state.ds.cloneWithRows(data)
      })
    }		else {
      setTimeout(() => {
        this._updateData(data)
      }, 16)
    }
  }

  renderRow (cell) {
    return (
      <LayoutCell
        key={cell.id}
        cell={cell}
        onPress={(cell) => {
          this.props.router.toPrograms({
            id: cell.id,
            cell
          })
        }}
         />
    )
  }

  render () {
    const {pullRefreshPending, tab, actions} = this.props
    return (
        <ImageBackground  source={{ uri: "http://cdn.video.51togic.com/metro/background/1520221029153.png" }}
                          style={styles.bg}>
      <ListView
        showsVerticalScrollIndicator
        removeClippedSubviews
        enableEmptySections
        contentContainerStyle={styles.row}
        ref={view => { this._listView = view }}
        pagingEnabled={false}
        dataSource={this.state.ds}
        renderRow={this.renderRow.bind(this)}
        refreshControl={
          <RefreshControl
            ref={(view) => this.refreshControl = view}
            refreshing={pullRefreshPending}
            onRefresh={() => {
              actions.updateLayoutByTab(tab)
            }}
            {...Constants.refreshControl}
						  />
					}
			/>
          </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width
  },
  row: {
    justifyContent: 'center',
    flexDirection:'row', //改变ListView的主轴方向
    flexWrap:'wrap', //换行
  },
  bg: {
    flex: 1,
    height,
    width,
    backgroundColor: 'transparent'
  }
})

export const LayoutComponent = AppLayouts
export function mapStateToProps (state, props) {
  const {tab} = props
  const tabStatus = state.home[tab]
  const cell = state.cell[tab]
  return {
    data: cell,
    ...tabStatus
  }
}
