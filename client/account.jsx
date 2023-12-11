// const helper = require('./helper.js');
// const React = require('react');
// const ReactDOM = require('react-dom');

// const Username = (props) => {
//     if (props.accounts.length === 0) {
//         return (
//             <div className="username">
//                 <h3 className="emptyAccount">No name found?</h3>
//             </div>
//         );
//     }

//     const userNode = props.accounts.map(account => {
//         return (
//             <div key={account._id} className="account">
//                 {}
//                 <h3 className="accountUser">{account.username} </h3>
//                 <h3 className="accountPass">{account.password} </h3>
//                 {}
//             </div>
//         );
//     });

//     return (
//         <div className="username">
//             {userNode}
//         </div>
//     );
// };

// const displayUsername = async () => {
//     const response = await fetch('/getAccount');
//     const data = await response.json();
//     ReactDOM.render(
//         <Username username={data.username} />,
//         document.getElementById('userName')
//     );
// };

// const init = () => {
//     ReactDOM.render(
//         <Username username='' />,
//         document.getElementById('userName')
//     );

//     displayUsername();
// };

// window.onload = init;
