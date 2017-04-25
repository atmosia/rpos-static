import React, {PropTypes} from 'react'
import jquery from 'jquery'
import LoginForm from './login-form'
import Auth from '../auth';

export default React.createClass ({
    displayName: 'LoginBox',

    propTypes: {
        loginURL: React.PropTypes.string.isRequired,
        history: React.PropTypes.object.isRequired,
    },

    getInitialState() {
        var succeed = function(sid) {
            this.props.history.push('/');
        }.bind(this);
        var fail = function(message) {
            this.setState({ message: "Login Failed" });
        }.bind(this);
        return {
            message: "",
            login: Auth.login(this.props.loginURL, succeed, fail),
        };
    },

    render() {
        return (
            <div className="login-box">
                <div className="login-title">rPOS Login</div>
                <div className="message">{ this.state.message }</div>
                <LoginForm login={this.state.login} />
            </div>
        );
    },
});
