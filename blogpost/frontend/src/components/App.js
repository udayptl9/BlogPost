import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Form } from '../components/blogs/form'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './layouts/header';
import Dashboard from './blogs/dashboard'
import { Provider } from 'react-redux'
import store from '../store'
class App extends Component {
    render() {
        return (
	<Provider store={store}>
            <Router>
            <Fragment>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={Dashboard} />
                    </Switch>
                </div>
            </Fragment>
            </Router>
        </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));