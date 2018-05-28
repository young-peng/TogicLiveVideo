/**
 * Created by py on 18-5-23.
 */
import React, {Component} from 'react'
import {View, StyleSheet, Text, Image, TouchableHighlight, Dimensions} from 'react-native'
import PropTypes from 'prop-types'
import { parseImgUrl } from '../utils'
const column = 3;

const { width } = Dimensions.get('window')
const itemWidth = (width/column)-40;
// const  mMarginRight=(width-itemWidth*row)/(row+1);

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
                    <Text style={styles.text}>{program.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}


var styles = StyleSheet.create({
    'imgWrapper': {
        alignItems:'center',
        width: itemWidth,
        height:itemWidth+100,
        margin:10
    },
    'img': {
        width:itemWidth,
        height:itemWidth
    },
    text:{
        color:'#adaca6',
        fontSize:18,
        marginTop:10,
        textAlign:'center'
    }
})

export default ProgramCell
