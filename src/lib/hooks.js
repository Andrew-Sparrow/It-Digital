import { useState, useEffect, useContext } from "react";
import { getStoreData } from "./indexedDB";
import { NoteContext } from "../App";


export const useStoreItems = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [errorObj, setErrorObj] = useState(null);

  const { isDBReady } = useContext(NoteContext);

  const getStoreItems = async (e) => {
    try {
      if (isDBReady) {
        const res = await getStoreData();
        setStoreItems(res);
        return storeItems;
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrorObj(err.message);
      } else {
        setErrorObj("Something went wrong to get notes");
      }
    }
  };

  useEffect(() => {
    getStoreItems();
  }, []);

  return storeItems;
};