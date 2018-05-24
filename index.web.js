/**
 * Created by py on 18-5-24.
 */
import 'babel-polyfill'
import 'fetch-detector'
import 'fetch-ie8'
import {AppRegistry} from 'react-native'
import TogicLiveVideo from './App'

AppRegistry.registerComponent('TogicLiveVideo', () => TogicLiveVideo)

var app = document.createElement('div')
document.body.appendChild(app)

AppRegistry.runApplication('TogicLiveVideo', {
    rootTag: app
})
