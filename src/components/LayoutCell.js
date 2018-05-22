/**
 * Created by py on 18-5-22.
 */
import React, {Component} from 'react'
import {View, StyleSheet, Text, Image, TouchableHighlight, Dimensions} from 'react-native'
import PropTypes from 'prop-types'
import { parseImgUrl } from '../utils'

const { width } = Dimensions.get('window')

class LayoutCell extends Component {
    static propTypes = {
        topic: PropTypes.object,
        footer: PropTypes.node,
        onPress: PropTypes.func
    };

    static defaultProps = {
        onPress: () => null
    };

    render () {
        const { cell } = this.props

        return (
            <TouchableHighlight
                onPress={() => { this.props.onPress(cell) }}
                underlayColor='#3498DB'
                key={cell.id}
                style={styles.row}>
                <View style={styles.imgWrapper}>
                    <Image
                        ref={view => this.imgView = view}
                        style={styles.img}
                        source={{uri: parseImgUrl(cell.background) }} />
                </View>
            </TouchableHighlight>
        )
    }
}

var styles = StyleSheet.create({
    'row': {
        'flexDirection': 'row',
        'borderBottomColor': 'rgba(0, 0, 0, 0.02)',
        'borderBottomWidth': 1,
        'paddingTop': 25,
        'paddingRight': 25,
        'paddingBottom': 25,
        'paddingLeft': 20,
        alignItems:'flex-start'
    },
    'imgWrapper': {
        flex:1
    },
    'img': {
        'height': 324,
        'width': 324,
        'borderRadius': 20
    }
})

export default LayoutCell
