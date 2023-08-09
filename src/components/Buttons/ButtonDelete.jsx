import React, {useContext, useState} from "react";
import { Button } from "./Button";
import { NoteContext } from "../../App";
import { deleteNote } from "../../lib/indexedDB";


const ButtonDelete = () => {
  const { activeId, isDBReady } = useContext(NoteContext);
  const [errorObj, setErrorObj] = useState(null);

  const handleClickDelete = async (evt) => {
    evt.preventDefault();

    try {
      if (isDBReady) {
        const res = await deleteNote( activeId );
        console.log(res);
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrorObj(err.message);
      } else {
        setErrorObj("Something went wrong to add new note");
      }
    }
  };

  return (
    <Button $isDisabled={!Boolean(activeId)} $outlined color={"#fff"} $align="flex-end" onClick={handleClickDelete}>
      Delete
    </Button>
  );
};

export { ButtonDelete };
