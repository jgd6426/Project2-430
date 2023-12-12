const helper = require('./helper.js');
const React = require('react');
const ReactDOM = require('react-dom');

/* Add our React components for our Note app */
const handleNote = (e) => {
    e.preventDefault();
    helper.hideError();

    const title = e.target.querySelector('#noteTitle').value;
    const due = e.target.querySelector('#noteDue').value;
    const info = e.target.querySelector('#noteInfo').value;

    if (!title) {
        helper.handleError('Title is required!');
        return false;
    }
    helper.clearNoteFormInputs();
    helper.handleError('Note added!');

    helper.sendPost(e.target.action, {title, due, info}, loadNotesFromServer);

    return false;
};

/* Handle when the user changes their password */
const handlePass = (e) => {
    e.preventDefault();
    helper.hideError();

    // get user's current password from server
    // const userPass = await fetch('/getPass');
    const oldPass = e.target.querySelector('#oldPass').value;
    const newPass = e.target.querySelector('#newPass').value;

    if (!oldPass || !newPass) {
        helper.handleError('Please fill out all information');
        return false;
    }

    if (oldPass === newPass) {
        helper.handleError('New password cannot be the same as current password');
        return false;
    }

    // if (oldPass != userPass) {
    //     helper.handleError('Current password is incorrect');
    //     return false;
    // }

    helper.handleError('Proceed to change password');

    return false;
};

/* Delete note from our app */
const deleteNote = async (id) => {
    // make a delete request to the server using fetch
    await fetch('/deleteNote/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: id}),
    });
    loadNotesFromServer();
};

/* Create a functional component to create our Add Note form.
    Similar to the signup and login forms. */
const NoteForm = (props) => {
    const [openForm, setOpenForm] = React.useState(false);

    return (
        <div className="noteFormArea">
            <button className="makeNoteBtn" onClick={() => setOpenForm(true)}>+</button>
            {openForm && <form id="noteForm" 
                onSubmit={handleNote}
                name="noteForm" 
                action="/maker" 
                method="POST" 
                className="noteForm"
            >
                <input id="noteTitle" type="text" name="title" placeholder="Note Title" autoComplete="off"/>
                <input id="noteDue" type="text" name="due" placeholder="Deadline" autoComplete="off"/>
                <textarea id="noteInfo" name="info" placeholder="Info" autoComplete="off" maxlength="285"></textarea>
                <input className="makeNoteSubmit" type="submit" value="Pin"/>

                <button className="closeForm" onClick={() => setOpenForm(false)}>x</button>

                <div id="message" class='appMessage hidden'>
                    <h3><span id="errorMessage"></span></h3>
                </div>
            </form>}
        </div>
    );
};

/* Create a component to display the list of Notes */
const NoteList = (props) => {
    if (props.notes.length === 0) {
        return (
            <div className="noteList">
                <h3 className="emptyNote">No Notes Yet!</h3>
            </div>
        );
    }

    const noteNodes = props.notes.map(note => {
        return (
            <div id={note._id} key={note._id} className="note">
                {}
                <button id="notePin" onClick={() => deleteNote(note._id)}></button>
                <h3 className="noteTitle">{note.title} </h3>
                <h3 className="noteInfo">{note.info} </h3>
                <h3 className="noteDue">{note.due} </h3>
                {}
            </div>
        );
    });

    return (
        <div className="noteList">
            {noteNodes}
        </div>
    );
};

/* Load the list of notes from the server.
    When it gets a new list back, it should rerender the noteList component
    so that it is up to date with the data. */
const loadNotesFromServer = async () => {
    const response = await fetch('/getNotes');
    const data = await response.json();
    ReactDOM.render(
        <NoteList notes={data.notes} />,
        document.getElementById('notes')
    );
};

/* Create a functional component to create our Password Change Note form.
    Similar to the add note, signup and login forms. */
const PassForm = (props) => {
    const [openForm, setOpenForm] = React.useState(false);

    return (
        <div className="passFormArea">
            <button className="changePassBtn" onClick={() => setOpenForm(true)}>*</button>
            {openForm && <form id="passForm" 
                onSubmit={handlePass}
                name="passForm" 
                action="/getUserName" 
                method="POST" 
                className="passForm"
            >
                <label id='passFormHeader'>Change Password:</label>
                <input id="oldPass" type="text" name="oldPass" placeholder="Current Password" autoComplete="off"/>
                <input id="newPass" type="text" name="newPass" placeholder="New Password" autoComplete="off"/>
                <input className="changePassSubmit" type="submit" value="Submit"/>

                <button className="closeForm" onClick={() => setOpenForm(false)}>x</button>

                <div id="message" class='appMessage hidden'>
                    <h3><span id="errorMessage"></span></h3>
                </div>
            </form>}
        </div>
    );
};

/* Add our React components for our ad space */
const AdSpace = (props) => {
    return (
        <div className="adSpace">
            <h3 className="adSpaceTitle">Ad Space</h3>
        </div>
    );
};

/* Render the NoteForm and NoteList components, 
    and have the client request the list of notes from the server. */
const init = () => {
    ReactDOM.render(
        <AdSpace />,
        document.getElementById('adSpace')
    );

    ReactDOM.render(
        <PassForm />,
        document.getElementById('changePassBtn')
    );

    ReactDOM.render(
        <NoteForm />,
        document.getElementById('makeNotes')
    );

    ReactDOM.render(
        <NoteList notes={[]} />,
        document.getElementById('notes')
    );

    loadNotesFromServer();
};

window.onload = init;
