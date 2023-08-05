import React from "react";
import { Button } from "./Button";

const ButtonDelete = () => {
  const handleClickAdd = () => {
    alert("handleClickDelete");
  };

  return (
    <Button $outlined color={"#fff"} $align="flex-end" onClick={handleClickAdd}>
      Delete
    </Button>
  );
};

export { ButtonDelete };
