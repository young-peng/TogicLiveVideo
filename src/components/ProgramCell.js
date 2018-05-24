/**
 * Created by py on 18-5-23.
 */
import React, {Component} from 'react'
import {View, StyleSheet, Text, Image, TouchableHighlight, Dimensions} from 'react-native'
import PropTypes from 'prop-types'
import { parseImgUrl } from '../utils'
const itemWidth = 280;
const row = 2;

const { width } = Dimensions.get('window')
const  mMarginRight=(width-itemWidth*row)/(row+1);

class ProgramCell extends Component {
    static propTypes = {
        program: PropTypes.object,
        onPress: PropTypes.func
    };

    static defaultProps = {
        onPress: () => null
    };

    render () {
        const { program } = this.props;
        console.log(program+"节目列表")
        return (
            <TouchableHighlight
                onPress={() => { this.props.onPress(program) }}
                underlayColor='#3498DB'
                key={program._id}
                style={styles.imgWrapper}>
                <View style={styles.imgWrapper}>
                    <Image
                        style={styles.img}
                        source={{uri: parseImgUrl(program.poster) }} />
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

export default ProgramCell
