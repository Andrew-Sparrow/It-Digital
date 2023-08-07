import React from "react";
import { Button } from "./Button";

const ButtonEdit = () => {
  const handleClickEdit = () => {
    alert("handleClickEdit");
  };

  return (
    <Button $outlined color={"#fff"} $align="flex-end" onClick={handleClickEdit}>
      Edit
    </Button>
  );
};

export { ButtonEdit };
