import React from "react";
import { Button } from "./Button";

const ButtonAdd = () => {
  const handleClickAdd = () => {
    alert("handleClickAdd");
  };

  return (
    <Button $outlined color={"#fff"} $align="flex-end" onClick={handleClickAdd}>
      Add
    </Button>
  );
};

export { ButtonAdd };
