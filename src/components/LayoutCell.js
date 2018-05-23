/**
 * Created by py on 18-5-22.
 */
import React, {Component} from 'react'
import {View, StyleSheet, Text, Image, TouchableHighlight, Dimensions} from 'react-native'
import PropTypes from 'prop-types'
import { parseImgUrl } from '../utils'
const itemWidth = 280;
const row = 2;

const { width } = Dimensions.get('window')
const  mMarginRight=(width-itemWidth*row)/(row+1);

class LayoutCell extends Component {
    static propTypes = {
        cell: PropTypes.object,
        onPress: PropTypes.func
    };

    static defaultProps = {
        onPress: () => null
    };

    render () {
        const { cell } = this.props;
        return (
            <TouchableHighlight
                onPress={() => { this.props.onPress(cell) }}
                underlayColor='#3498DB'
                key={cell.id}
                style={styles.imgWrapper}>
                <View style={styles.imgWrapper}>
                    <Image
                        style={styles.img}
                        source={{uri: parseImgUrl(cell.content.background) }} />
                </View>
            </TouchableHighlight>
        )
    }
}


var styles = StyleSheet.create({
    'imgWrapper': {
        alignItems:'center',
        width: itemWidth,
        height:itemWidth,
        marginLeft:mMarginRight,
        marginBottom:10,
        borderRadius:10
    },
    'img': {
        width:itemWidth,
        height:itemWidth,
    }
})

export default LayoutCell
