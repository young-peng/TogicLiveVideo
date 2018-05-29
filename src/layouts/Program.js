import React, {Component} from 'react';
import {View, Dimensions, Image, Text, Slider, TouchableWithoutFeedback, TouchableOpacity, Button, StyleSheet} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import VideoPlay from "../components/VideoPlayer"
import FullscreenVideo from '../components/FullVideoPlayer'
const screenWidth = Dimensions.get('window').width;

function formatTime(second) {
    let h = 0, i = 0, s = parseInt(second);
    if (s > 60) {
        i = parseInt(s / 60);
        s = parseInt(s % 60);
    }
    // 补零
    let zero = function (v) {
        return (v >> 0) < 10 ? "0" + v : v;
    };
    return [zero(h), zero(i), zero(s)].join(":");
}

 class Program extends Component {

     constructor(props) {
         super(props);
         this.state = {
             videoUrl: "https://vfx.mtime.cn/Video/2017/01/05/mp4/170105105137886980.mp4",
             videoCover: "http://puui.qpic.cn/vpic/0/s0016uzzh4e.png/0",
             videoWidth: screenWidth,
             videoHeight: screenWidth * 9 / 16, // 默认16：9的宽高比
             showVideoCover: true,    // 是否显示视频封面
             showVideoControl: false, // 是否显示视频控制组件
             isPlaying: false,        // 视频是否正在播放
             currentTime: 0,        // 视频当前播放的时间
             duration: 0,           // 视频的总时长
             isFullScreen: false,     // 当前是否全屏显示
             playFromBeginning: false, // 是否从头开始播放
         };
     }

     render() {
         return (
             <Router>
                 <Scene key="root">
                     <Scene key="main" component={VideoPlay} initial={true} hideNavBar={true} />
                     <Scene
                         key="fullscreenVideo"
                         component={FullscreenVideo}
                         hideNavBar={true}
                         duration={1} />
                 </Scene>
             </Router>
         );
     }

 }
export const LayoutComponent = Program
export function mapStateToProps (state, props) {
    // const {cell} = props
    const program = state.program
    return {
        data: program
    }
}