// https://dev.to/esponges/indexeddb-your-offline-and-serverless-db-in-your-browser-with-react-3hm7

let request;
let db;
let version = 1;
const DB_NAME = 'notesDB';
const STORE_NAME = 'NotesStore';


export const initDB = () => {
  return new Promise((resolve) => {
    // open the connection
    request = indexedDB.open(DB_NAME);

    request.onupgradeneeded = () => {
      db = request.result;

      // if the data object store doesn't exist, create it
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      resolve(true);
    };

    request.onerror = () => {
      resolve(false);
    };
  });
};

export const addData = (data) => {
  return new Promise((resolve) => {
    request = indexedDB.open(DB_NAME, version);

    request.onsuccess = () => {
      db = request.result;

      db.transaction(STORE_NAME, 'readwrite')
        .objectStore(STORE_NAME)
        .add(data);

      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) {
        resolve(error);
      } else {
        resolve('Unknown error');
      }
    };
  });
};

export const getStoreDataAsync = () => {
  return new Promise((resolve) => {
    // const request = indexedDB.open(STORE_NAME);

    request.onsuccess = () => {
      console.log('request.onsuccess - getAllData');
      // db = request.result;
      const res = db.transaction(STORE_NAME, 'readonly')
        .objectStore(STORE_NAME)
        .getAll();

      console.log(res.result);
      resolve(res.result);

      db.transaction.oncomplete = (event) => {
        // Store values in the newly created objectStore.

        res.onsuccess = () => {
        };
      };
    };

    request.onerror = (err) => {
      console.error(err.message);
    }
  });
};

export function getStoreData() {
  // const request = db.transaction(STORE_NAME)
  //   .objectStore(STORE_NAME)
  //   .getAll();
  request = indexedDB.open(DB_NAME, version);

  db.transaction.oncomplete = (event) => {
    // Store values in the newly created objectStore.
    const res = db.transaction(STORE_NAME, 'readonly')
      .objectStore(STORE_NAME)
      .getAll();

    res.onsuccess = () => {
      console.log(res.result);
      // resolve(res.result);
      return res.result;
    };
  };

  request.onsuccess = () => {
    const notes = request.result;

    console.log('Got all the notes');
    console.log(notes);

    return notes;
  }

  request.onerror = (err) => {
    console.error(`Error to get all notes: ${ err }`)
  }
}
