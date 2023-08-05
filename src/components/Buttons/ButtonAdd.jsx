import React, { useState, useContext } from "react";
import { Button } from "./Button";
import { addData } from "../../lib/indexedDB";
import { NoteContext } from "../../App";

const ButtonAdd = () => {
  const [error, setError] = useState({});

  const { isDBReady } = useContext(NoteContext);

  const handleAddUser = async (e) => {
    e.preventDefault();

    const title = "Your New Note Title";
    const text = "Your New Note";
    title.trim();
    text.trim();

    const id = Date.now();
    const time = Date.now();

    try {
      if (isDBReady) {
        const res = await addData({ text, id, time, title });
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <Button $outlined color={"#fff"} $align="flex-end" onClick={handleAddUser} $isDisabled={!isDBReady}>
      Add
    </Button>
  );
};

export { ButtonAdd };
