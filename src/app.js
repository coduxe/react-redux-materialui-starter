import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { Route, Switch } from 'react-router-dom'
import { ProtectedRoute } from './components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import thunkMiddleware from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux'
import { TestContainer } from './containers'
import reducers from './reducers'
import actions from './actions'

const history = createHistory()
const store = createStore(
  combineReducers({ ...reducers, router: routerReducer }),
  applyMiddleware(thunkMiddleware, routerMiddleware(history))
)

class App extends Component {
  constructor(props) {
    super(props)
    this.debug()
  }

  debug() {
    window.store = store
    store.subscribe(() => console.log(store.getState()))
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Switch>
              <Route exact path={'/'} component={TestContainer} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
