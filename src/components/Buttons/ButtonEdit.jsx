import React from "react";
import { Button } from "./Button";

const ButtonEdit = () => {
  const handleClickAdd = () => {
    alert("handleClickEdit");
  };

  return (
    <Button $outlined color={"#fff"} $align="flex-end" onClick={handleClickAdd}>
      Edit
    </Button>
  );
};

export { ButtonEdit };
