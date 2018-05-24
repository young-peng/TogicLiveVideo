import React, {Component} from 'react'
import {View, StyleSheet, Text, ListView, Dimensions, RefreshControl,Alert} from 'react-native'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ProgramCell from './../components/ProgramCell'
import * as Constants from '../constants'

const {height, width} = Dimensions.get('window')

class ProgramList extends Component {
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

  componentDidMount () {
        const {actions, id, cell} = this.props
        if (cell) {
            actions.getProgramByCategoryId(id)
        }
  }

  _updateData (data) {
    this.setState({
      ds: this.state.ds.cloneWithRows(data)
    })
  }

  _onEndReached () {
    const {actions, cell, page,limit,data} = this.props
    if (data.length) {
      actions.getProgramByCategoryId(cell.category_id, {
        page: page + 1,
        limit
      })
    }
  }

  renderRow (programs) {
    return (
      <ProgramCell
        key={programs._id}
        program={programs}
        onPress={(programs) => {
          this.props.router.toProgram({
            _id: programs._id,
            programs
          })
        }}
         />
    )
  }

  render () {
    const {pullRefreshPending, cell, actions} = this.props
    return (
      <ListView
        showsVerticalScrollIndicator
        removeClippedSubviews
        enableEmptySections
        ref={view => { this._listView = view }}
        initialListSize={10}
        pagingEnabled={false}
        scrollRenderAheadDistance={90}
        dataSource={this.state.ds}
        renderRow={this.renderRow.bind(this)}
        onEndReachedThreshold={30}
        onEndReached={this._onEndReached.bind(this)}
        refreshControl={
          <RefreshControl
            ref={(view) => this.refreshControl = view}
            refreshing={pullRefreshPending}
            onRefresh={() => {
              actions.updateProgramByCategoryId(cell.category_id)
            }}
            {...Constants.refreshControl}
						  />
					}
			/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width
  },
  'row': {
    'height': 90,
    'flexDirection': 'row',
    'borderBottomColor': 'rgba(0, 0, 0, 0.02)',
    'borderBottomWidth': 1,
    'paddingTop': 25,
    'paddingRight': 0,
    'paddingBottom': 25,
    'paddingLeft': 20
  },
  reachedEndLoading: {
    paddingTop: 20,
    paddingBottom: 20
  }
})

export const LayoutComponent = ProgramList
export function mapStateToProps (state, props) {
  console.log(state,props);
  const {cell} = props
  const programs = state.programs.programs
  return {
    data: programs
  }
}
