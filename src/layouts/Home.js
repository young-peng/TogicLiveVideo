/**
 * Created by py on 18-5-21.
 */
import React, {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, Alert, Easing, Platform} from 'react-native'
import ScrollableTabs from '../components/ScrollableTabs'
import * as AppLayoutsComponent from './AppLayouts'
import * as Tabs from '../constants/Tabs'
import connectComponent from '../utils/connectComponent'

const AppLayouts = connectComponent(AppLayoutsComponent)
const {height, width} = Dimensions.get('window')

class Home extends Component {
    componentDidMount () {
        const {actions, cell} = this.props
        if (!cell.index || !cell.index.length) {
            actions.updateLayoutByTab("index")
        }

        // Just for test on Android, see workaroundOfStartNative() in e2e/steps/init.js
        if (Platform.OS === 'android') {
            Alert.alert(
                'Welcome',
                'Welcome to LiveVideo', [{
                    text: 'OK',
                    onPress: () => {}
                }]
            )
        }
    }

    _onPageChanged (page, isScrolling) {
        const {actions, cell, ui} = this.props
        const tab = Tabs.tabs[page]
        if (!cell[tab] || !cell[tab].length) {
            actions.updateLayoutByTab(tab)
        }
    }

    _renderLayouts () {
        return ["index", "hot", "zone", "my"].map((item) => {
            return (
                <AppLayouts
                    router={this.props.router}
                    key={item} tab={item}
                    isTabScrolling={() => this._scrollableTabs && this._scrollableTabs.isScrolling()()}
                />
            )
        })
    }

    render () {
        const {router, message} = this.props
        return (
            <View style={styles.container}>
                <ScrollableTabs
                    ref={view => this._scrollableTabs = view}
                    tabs={['影视', '热门', '专区', '设置']}
                    index ={1}
                    onPageChangedAndAnimateEnd={this._onPageChanged.bind(this)}
                >
                    { this._renderLayouts() }
                </ScrollableTabs>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flex: 1
    },
    bg: {
        width,
        height,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export const LayoutComponent = Home
export function mapStateToProps (state) {
    return {
        cell: state.cell,
        ui: state.home
    }
}
