import React, {useContext} from "react";
import { Button } from "./Button";
import { NoteContext } from "../../App";


const ButtonDelete = () => {
  const { activeId } = useContext(NoteContext);

  const handleClickDelete = () => {
    alert(`handleClickDelete - ${activeId}`);
  };

  return (
    <Button $isDisabled={!Boolean(activeId)} $outlined color={"#fff"} $align="flex-end" onClick={handleClickDelete}>
      Delete
    </Button>
  );
};

export { ButtonDelete };
