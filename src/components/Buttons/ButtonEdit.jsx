import React, {useContext} from "react";
import { Button } from "./Button";
import { NoteContext } from "../../App";

const ButtonEdit = () => {
  const { activeId, textAreaRef } = useContext(NoteContext);

  const handleClickEdit = () => {
    textAreaRef.current.focus();
  };

  return (
    <Button $isDisabled={!Boolean(activeId)} $outlined color={"#fff"} $align="flex-end" onClick={handleClickEdit}>
      Edit
    </Button>
  );
};

export { ButtonEdit };
