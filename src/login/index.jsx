import ReactDOM from 'react-dom'
import React from 'react'
import LoginBox from './login-box'

window.rpos = window.rpos || {};

window.rpos.loginInit= function(selector, baseURL, props = {}) {
    props.baseURL = baseURL;
    ReactDOM.render(<LoginBox{...props} />,
            document.querySelector(selector));
}
