import React, {
    Component
} from 'react'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'
import Navigation from './src/layouts/Navigation'

const store = configureStore()

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        )
    }
}

export default App