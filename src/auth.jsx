import cookie from 'react-cookie'

function create_login(url, succeed, fail) {
    console.log("initial url: " + url);
    var url = url + "/session";
    return function(email, password) {
        var data = {
            email: email,
            password: password
        };
        console.log("curling " + url);
        $.ajax({
            method: "POST",
            url: url,
            contentType: 'application/json; charset=UTF-8',
            data: JSON.stringify(data),
            success: function(data, textStatus, request) {
                var sid = request.getResponseHeader('Location').substring(9);
                // TODO: set secure on this
                cookie.save('session', sid);
                succeed(sid);
            },
            error: function(xhr, status, error) {
                fail("Login Failed");
            },
        });
    }.bind(this);
}

function create_auth(url) {
    return function() {
        var session_id = cookie.load('session');
        if(session_id === undefined)
            return false;
        return true;
    };
}

export default {
    login: create_login,
    auth: create_auth,
};
