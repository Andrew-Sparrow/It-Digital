// https://dev.to/esponges/indexeddb-your-offline-and-serverless-db-in-your-browser-with-react-3hm7

let request;
let db;
let version = 1;
const DB_NAME = 'notesDB';
const STORE_NAME = 'NotesStore';


export const initDB = () => {
  return new Promise((resolve) => {

    // open the connection
    request = indexedDB.open(DB_NAME, version);

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
  })
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

export const getStoreData = () => {
  return new Promise((resolve) => {

    const request = db.transaction(STORE_NAME, 'readonly')
      .objectStore(STORE_NAME)
      .getAll();

    request.onsuccess = () => {
      db.transaction(STORE_NAME, 'readwrite')
        .objectStore(STORE_NAME)
        .getAll();

      console.log('Got all the notes');
      console.log(request.result);

      resolve(request.result);
    }

    request.onerror = (err) => {
      console.error(`Error to get all notes: ${ err.message }`)
    }
  });
}

export const deleteData = (key) => {
  return new Promise((resolve) => {
    request = indexedDB.open(DB_NAME, version);

    request.onsuccess = () => {
      db = request.result;

      db.transaction(STORE_NAME, 'readwrite')
        .objectStore(STORE_NAME)
        .delete(key);

      console.log(`note deleted ${ request.result }`);
      resolve(request.result);
    }

    request.onerror = (err) => {
      console.error(`Error to delete note: ${ err.message }`)
    }
  });
}
