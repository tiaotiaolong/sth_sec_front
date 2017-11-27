import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Router, Route, hashHistory ,IndexRoute } from 'react-router'
import Repos from './components/utils/repos/Repos'
import Riskversion from './components/utils/risk/Riskversion'
import Riskpublish from './components/utils/risk/Riskpublish'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { RiskReducer } from './reducers/act_reduce'


//redux store 定义
const store = createStore(RiskReducer)


render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/repos" component={Repos}/>
        <Route path="/riskpublish" component={Riskpublish}/>
        <Route path="/riskversion" component={Riskversion}/>
        {/* <Route path="/riskpublish" component={Riskpublish}/> */}
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('root'))
registerServiceWorker();
