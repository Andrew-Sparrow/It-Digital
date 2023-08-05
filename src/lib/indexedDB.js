// https://dev.to/esponges/indexeddb-your-offline-and-serverless-db-in-your-browser-with-react-3hm7

let request;
let db;
let version = 1;
const DBName = 'notesDB';
const storeName = 'NotesStore';


export const addData = (data) => {
  return new Promise((resolve) => {
    request = indexedDB.open(DBName, version);

    request.onsuccess = () => {
      console.log('request.onsuccess - addData', data);

      db = request.result;

      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      store.add(data);
      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message
      if (error) {
        resolve(error);
      } else {
        resolve('Unknown error');
      }
    };
  });
};


export const initDB = () => {
  return new Promise((resolve) => {
    // open the connection
    request = indexedDB.open(DBName);

    request.onupgradeneeded = () => {
      db = request.result;

      // if the data object store doesn't exist, create it
      if (!db.objectStoreNames.contains(storeName)) {
        console.log(`Creating - ${storeName}`);
        db.createObjectStore(storeName, { keyPath: 'id' });
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
