import ReactDOM from 'react-dom'
import React from 'react'
import RposAuth from '../rpos-auth/rpos-auth'


window.rpos = window.rpos || {};

window.rpos.loginInit= function(selector, baseURL, props = {}) {
    props.baseURL = baseURL;
}
