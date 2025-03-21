import { useEffect, useState } from "react";
export const useInputEvent = () => {
  const [key, setKey] = useState(null);
  useEffect(() => {
    const keyDownHandler = ({ code }) => setKey(code);
    const keyUpHandler = () => setKey(null);
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler)
    }
  }, []);
  return key;
}