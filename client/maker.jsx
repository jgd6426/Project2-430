const helper = require('./helper.js');
const React = require('react');
const ReactDOM = require('react-dom');

/* Add our React components for our Domo app */
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

    helper.sendPost(e.target.action, {title, due, info}, loadNotesFromServer);

    return false;
};

/* Create a functional component to create our Add Domo form.
    Similar to the signup and login forms. */
const NoteForm = (props) => {
    return (
        <form id="noteForm" 
            onSubmit={handleNote} 
            name="noteForm" 
            action="/maker" 
            method="POST" 
            className="noteForm"
        >
            <label htmlFor="title">Title:</label>
            <input id="noteTitle" type="text" name="title" placeholder="Note Title"/>
            <label htmlFor="due">Due:</label>
            <input id="noteDue" type="text" name="due" placeholder="Due"/>
            <label htmlFor="info">Info:</label>
            <input id="noteInfo" type="text" name="info" placeholder="Info"/>
            <input className="makeNoteSubmit" type="submit" value="Make Note"/>
        </form>
    );
};

/* Create a component to display the list of Domos */
const NoteList = (props) => {
    if (props.notes.length === 0) {
        return (
            <div className="noteList">
                <h3 className="emptyDomo">No Notes Yet!</h3>
            </div>
        );
    }

    const noteNodes = props.domos.map(note => {
        return (
            <div key={note._id} className="note">
                {}
                <h3 className="noteTitle"> Title: {note.title} </h3>
                <h3 className="noteDue"> Duee: {note.due} </h3>
                <h3 className="noteInfo"> Info: {note.info} </h3>
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

/* Load the list of domos from the server.
    When it gets a new list back, it should rerender the domoList component
    so that it is up to date with the data. */
const loadNotesFromServer = async () => {
    const response = await fetch('/getNotes');
    const data = await response.json();
    ReactDOM.render(
        <NoteList notes={data.notes} />,
        document.getElementById('notes')
    );
};

/* Render the DomoForm and DomoList components, 
    and have the client request the list of domos from the server. */
const init = () => {
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
