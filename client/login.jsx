const helper = require('./helper.js');
const React = require('react');
const ReactDOM = require('react-dom');

/* Handle the submit event on the login form */
const handleLogin = (e) => {
    e.preventDefault();
    helper.hideError();

    const username = e.target.querySelector('#userL').value;
    const pass = e.target.querySelector('#passL').value;

    if (!username || !pass) {
        helper.handleError('Please fill out all information');
        return false;
    }

    helper.sendPost(e.target.action, {username, pass});

    return false;
};

/* Handle clicks to the signup button */
const handleSignup = (e) => {
    e.preventDefault();
    helper.hideError();

    const username = e.target.querySelector('#userS').value;
    const pass = e.target.querySelector('#passS').value;
    const pass2 = e.target.querySelector('#pass2').value;

    if (!username || !pass || !pass2) {
        helper.handleError('Please fill out all information');
        return false;
    }

    if (pass != pass2) {
        helper.handleError('Oops! Your passwords need to match');
        return false;
    }

    helper.sendPost(e.target.action, {username, pass, pass2});

    return false;
};

/* Create our React components that will direct the user to the log in page */
const LoginDirectory = (props) => {
    const zstyle = {
        zIndex: 1
    };

    return (
        <form id="loginDirectory" 
            name="loginDirectory" 
            action="/login" 
            method="GET" 
            className="subForm"
        >
            <div className="elements">
                <label class="welcome">Welcome!</label>
                <p class="directQ">Already have an account?</p>
                <input id="loginButton" className="formSubmit" type="submit" value="Log In" style={zstyle} />
                <input id="signupButton" className="formSubmit hidden" disabled type="submit" value="Sign Up" />
            </div>
        </form>
    );
};

/* Create our React components that will direct the user to the sign up page */
const SignupDirectory = (props) => {
    const zstyle = {
        zIndex: 1
    };

    return (
        <form id="signupDirectory" 
            name="signupDirectory" 
            action="/signup" 
            method="POST" 
            className="subForm"
        >
            <div className="elements">
                <label class="welcome">Welcome!</label>
                <p class="directQ">Don't have an account?</p>
                <input id="signupButton" className="formSubmit" type="submit" value="Sign Up" style={zstyle} />
                <input id="loginButton" className="formSubmit hidden" disabled type="submit" value="Log In" />
            </div>
        </form>
    );
};


/* Create our React components that will use the event handlers to render the login page*/
const LoginWindow = (props) => {
    return (
        <form id="loginForm" 
            name="loginForm" 
            onSubmit={handleLogin} 
            action="/login" 
            method="POST" 
            className="mainForm"j
        >
            <label class="title">Log In</label>
            <input id="userL" type="text" name="usernameL" placeholder="Username" autoComplete="off" />
            <input id="passL" type="password" name="passL" placeholder="Password" autoComplete="off" />

            <div id="message" class='messageL hidden'>
                <h3><span id="errorMessage"></span></h3>
            </div>

            <input className="formSubmit" type="submit" value="Log In" />

        </form>
    );
};

/* Similar to LoginWindow() to render the signup page */
const SignupWindow = (props) => {
    return (
        <form id="signupForm" 
            name="signupForm" 
            onSubmit={handleSignup} 
            action="/signup" 
            method="POST" 
            className="mainForm"
        >
            <label class="title">Sign Up</label>
            <input id="userS" type="text" name="usernameS" placeholder="Username" autoComplete="off" />
            <input id="passS" type="password" name="passS" placeholder="Password" autoComplete="off" />
            <input id="pass2" type="password" name="pass2" placeholder="Retype Password" autoComplete="off" />

            <div id="message" class='messageS hidden'>
                <h3><span id="errorMessage"></span></h3>
            </div>

            <input className="formSubmit" type="submit" value="Sign Up" />
        </form>
    );
};

/* Add event listeners to the buttons on the page, 
    so that the react components get rendered when they are clicked.
    also tell it to render the LoginWindow immediately so that
    there is something on the page when the user first loads it. */
const init = () => {
    ReactDOM.render(<LoginWindow />, 
        document.getElementById('content'));

    ReactDOM.render(<SignupDirectory />, 
        document.getElementById('directory'));

    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        ReactDOM.render(<LoginWindow />, 
            document.getElementById('content'));
        ReactDOM.render(<SignupDirectory />, 
            document.getElementById('directory'));
        return false;
    });

    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        ReactDOM.render(<SignupWindow />, 
            document.getElementById('content'));
        ReactDOM.render(<LoginDirectory />, 
            document.getElementById('directory'));
        return false;
    });
};

window.onload = init;
