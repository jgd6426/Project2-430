const helper = require('./helper.js');
const React = require('react');
const ReactDOM = require('react-dom');

/* Handle the submit event on the login form */
const handleLogin = (e) => {
    e.preventDefault();
    helper.hideError();

    const username = e.target.querySelector('#user').value;
    const pass = e.target.querySelector('#pass').value;

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

    const username = e.target.querySelector('#user').value;
    const pass = e.target.querySelector('#pass').value;
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

/* Create our React components that will use the event handlers to render the login page*/
const LoginWindow = (props) => {
    return (
        <form id="loginForm" 
            name="loginForm" 
            onSubmit={handleLogin} 
            action="/login" 
            method="POST" 
            className="mainForm"
        >
            <label class="title">Log In</label>
            <input id="userL" type="text" name="usernameL" placeholder="Username" />
            <input id="passL" type="password" name="passL" placeholder="Password" />

            <div className='messageL' id="message" class='hidden'>
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
            <input id="userS" type="text" name="usernameS" placeholder="Username" />
            <input id="passS" type="password" name="passS" placeholder="Password" />
            <input id="pass2" type="password" name="pass2" placeholder="Retype Password" />

            <div className='messageS' id="message" class='hidden'>
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
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        ReactDOM.render(<LoginWindow />, 
            docunent.getElementById('content'));
        return false;
    });

    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        ReactDOM.render(<SignupWindow />, 
            document.getElementById('content'));
        return false;
    });

    ReactDOM.render(<LoginWindow />, 
        document.getElementById('content'));
};

window.onload = init;
