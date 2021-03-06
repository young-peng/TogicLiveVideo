/**
 * Created by py on 18-5-21.
 */
import React from 'react'
import ReactNative from 'react-native'
import {Platform, BackHandler} from 'react-native'
import _ from 'lodash'
import * as Programs from "../layouts/ProgramList"
import * as HomeComponent from '../layouts/Home'
import * as CustomSceneConfigs from '../configs/sceneConfig'
import connectComponent from '../utils/connectComponent'
import * as Program from "../layouts/Program"

const Home = connectComponent(HomeComponent)

const {
    SceneConfigs
} = ReactNative

class Router {
    constructor (navigator) {
        this.navigator = navigator
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', () => {
                const routesList = this.navigator.getCurrentRoutes()
                const currentRoute = routesList[routesList.length - 1]
                if (currentRoute.name !== 'home') {
                    navigator.pop()
                    return true
                }
                return false
            })
        }
    }

    push (props = {}, route) {
        let routesList = this.navigator.getCurrentRoutes()
        let nextIndex = routesList[routesList.length - 1].index + 1
        route.props = props
        route.index = nextIndex
        route.sceneConfig = route.sceneConfig ? route.sceneConfig : CustomSceneConfigs.customFloatFromRight
        route.id = _.uniqueId()
        route.component = connectComponent(route.component)
        this.navigator.push(route)
    }

    pop () {
        this.navigator.pop()
    }

    // toAbout (props) {
    //     this.push(props, {
    //         component: About,
    //         name: 'about',
    //         sceneConfig: CustomSceneConfigs.customFloatFromBottom
    //     })
    // }
    //
    // toLogin (props) {
    //     this.push(props, {
    //         component: Login,
    //         name: 'login',
    //         sceneConfig: CustomSceneConfigs.customFloatFromBottom
    //     })
    // }
    //
    // toQRCode (props) {
    //     this.push(props, {
    //         component: QRCode,
    //         name: 'qrcode',
    //         sceneConfig: CustomSceneConfigs.customFloatFromBottom
    //     })
    // }
    //
    // toUser (props) {
    //     this.push(props, {
    //         component: User,
    //         name: 'user'
    //     })
    // }
    //
    // toMessage (props) {
    //     this.push(props, {
    //         component: Message,
    //         name: 'message'
    //     })
    // }
    //
    toPrograms (props) {
        this.push(props, {
            component: Programs,
            name: 'programs'
        })
    }
    //
    toProgram (props) {
        this.push(props, {
            component: Program,
            name: 'program'
        })
    }
    //
    // toPublish (props) {
    //     this.push(props, {
    //         component: Publish,
    //         name: 'publish'
    //     })
    // }
}

export default Router
