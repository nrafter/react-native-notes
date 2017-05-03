import fetch from 'isomorphic-fetch';

export const ADD_NOTES = 'ADD_NOTES';
export const FETCH_SINGLE = 'FETCH_SINGLE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const LOAD_STORED = 'LOAD_STORED';
export const DELETE_NOTE = 'DELETE_NOTE';
export const START_REQUEST = 'START_REQUEST';
export const COMPLETE_REQUEST = 'COMPLETE_REQUEST';

export function addNote(newNote) {
  return {
    type: ADD_NOTES,
    payload: newNote,
  };
}

export function updateNote(updatedNote) {
  return {
    type: UPDATE_NOTE,
    payload: updatedNote,
  };
}

export function deleteNote(noteId) {
  return {
    type: DELETE_NOTE,
    payload: noteId,
  };
}

function requestStart() {
  return {
    type: START_REQUEST,
  };
}

function requestComplete(data) {
  return {
    type: COMPLETE_REQUEST,
    payload: data,
  };
}

export function downloadNotes() {
  return async (dispatch) => {
    dispatch(requestStart);
    return fetch(`https://www.reddit.com/.json`)
      .then(response => response.json())
      .then(json => { dispatch(requestComplete(json)); });
  };
}
