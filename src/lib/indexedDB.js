// https://dev.to/esponges/indexeddb-your-offline-and-serverless-db-in-your-browser-with-react-3hm7

let request;
let db;
let version = 1;


export const initDB = () => {
  return new Promise((resolve) => {
    // open the connection
    request = indexedDB.open('notesDB');

    request.onupgradeneeded = () => {
      db = request.result;

      // if the data object store doesn't exist, create it
      if (!db.objectStoreNames.contains('NotesStore')) {
        console.log('Creating NotesStore');
        db.createObjectStore('NotesStore', { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      console.log('request.onsuccess - initDB', version);
      resolve(true);
    };

    request.onerror = () => {
      resolve(false);
    };
  });
};
