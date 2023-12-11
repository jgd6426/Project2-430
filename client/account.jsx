const helper = require('./helper.js');
const React = require('react');
const ReactDOM = require('react-dom');

const Username = (props) => {
    return (
        <div className="username">
            <p>{helper.getUserName}</p>
        </div>
    );
};

const init = () => {
    ReactDOM.render(
        <Username />,
        document.getElementById('userName')
    );

    // displayUsername();
};

window.onload = init;
