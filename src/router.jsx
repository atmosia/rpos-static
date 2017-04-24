import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link} from 'react-router'
import {createHashHistory} from 'history'
import LoginBox from './login/login-box'
import Auth from './auth'


window.rpos = window.rpos || {};

window.rpos.router = function(selector, urlList, props = {}) {
    var history = createHashHistory();
    var authFunc = Auth.auth(urlList.auth);
    var requireAuth = function(nextState, replace) {
        if(!authFunc())
            replace({ pathname: '/login' });
    }

    var dashboard = React.createClass({
        render() {
            return (<div>DASHBOARD</div>);
        },
    });

    var app = React.createClass({
        render() {
            return (<div>
                        <div>
                            <Link to="/">Home</Link>
                            <Link to="clubs">Clubs</Link>
                            <Link to="pos">POS</Link>
                            <Link to="shop">Shop</Link>
                        </div>
                    <div>{ this.props.children }</div></div>);
        },
    });

    var login = React.createClass({
        render() {
            return (<LoginBox loginURL={urlList.login} history={history} />);
        },
    });

    var clubs = React.createClass({
        render() {
            return (<div>CLUBS</div>)
        },
    });

    var pos = React.createClass({
        render() {
            return (<div>POS</div>)
        },
    });

    var shop = React.createClass({
        render() {
            return (<div>SHOP</div>)
        },
    });

    ReactDOM.render(
        <Router history={history}>
            <Route path="/" component={app}>
                <IndexRoute component={dashboard} onEnter={requireAuth} />
                <Route path="clubs" component={clubs} onEnter={requireAuth} />
                <Route path="pos" component={pos} onEnter={requireAuth} />
                <Route path="shop" component={shop} onEnter={requireAuth} />
            </Route>
            <Route path="/login" component={login} />
        </Router>,
        document.querySelector(selector));
}
