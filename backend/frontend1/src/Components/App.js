import React from 'react'
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch,Redirect} from  "react-router-dom"

import Header from './layout/Header'
import Footer from './layout/Footer'

import PrivateRoute from './common/PrivateRoute'

import Login from './accounts/Login'
import Register from './accounts/Register'

import Alerts from './layout/Alerts'
import Dashboard from './leads/Dashboard'
import {Provider} from 'react-redux'
import store from '../store'

import {loadUser} from '../actions/auth'

import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
//Alert Options
const alertOptions = {
    timeout:3000,
    position:"top center"
}
class App extends React.Component {
    componentDidMount(){
        store.dispatch(loadUser())
    }
    render() {
        return(
            <Provider store={store}>
            <div>  
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Router>
                <Header />
                <Alerts />
                <div className="container">
                  <Switch>
                      <PrivateRoute exact path="/" component={Dashboard} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/login" component={Login} />
                  </Switch>
                  </div>
                <Footer />
                </Router>
                </AlertProvider>
            </div>
            </Provider>
        )
    }
}


ReactDOM.render( < App / > , document.getElementById('app'))