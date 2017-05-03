import Realm from 'realm';

const NoteSchema = {
  name: 'Note',
  properties: {
    id: 'int',
    title: 'string',
    description: 'string',
  },
};

const realm = new Realm({ schema: [NoteSchema] });

let setItem = null;
let getItem = null;
let getAllKeys = null;
let removeItem = null;

(async () => {
  debugger;
  setItem = (id, title, description) => {
    await realm.write(() => {
      realm.create('Note', { id, title, description });
    });
  }
})();

const storage = {
  setItem: (id, title, description) => {
    realm.write(() => {
      realm.create('Note', { id, title, description });
    });
  },
  getItem: id => realm.objects('Note').filtered(id),
  removeItem: (id) => {
    realm.write(() => {
      const object = realm.objects('Note').filtered(id);
      realm.delete(object);
    });
  },
  getAllKeys: () => realm.objects('Note'),
};

export default storage;
