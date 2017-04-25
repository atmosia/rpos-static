import React, {PropTypes} from 'react'

export default React.createClass ({
    displayName: 'LoginForm',

    propTypes: {
        login: React.PropTypes.func.isRequired,
    },

    login() {
        this.props.login(this.state.email, this.state.password);
    },

    handleChange(event) {
        var target = event.target;
        if(target.id === "email")
            this.setState({email: target.value});
        else if(target.id === "password")
            this.setState({password: target.value});
    },

    getInitialState() {
        return {
            email: "",
            password: "",
        };
    },

    render() {
        return (
            <form>
                <div>
                    <span>Email</span>
                    <span>
                        <input
                            type='text'
                            id='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                    </span>
                </div>
                <div>
                    <span>Password</span>
                    <span>
                        <input
                            type='password'
                            id='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                    </span>
                </div>
                <div className="button-field">
                    <input
                        type='submit'
                        value='Login'
                        onClick={this.login}
                        />
                </div>
            </form>
        );
    }
});
