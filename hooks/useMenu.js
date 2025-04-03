import { useState } from "react";

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return { isOpen, handleOpen, handleClose };
}
