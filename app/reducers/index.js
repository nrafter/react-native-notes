import { combineReducers } from 'redux';
import NotesReducer from './notes';
import CurrentNoteReducer from './current';

const rootReducer = combineReducers({
  allNotes: NotesReducer,
  currentNote: CurrentNoteReducer,
});

export default rootReducer;
