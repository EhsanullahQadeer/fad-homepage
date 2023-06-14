import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SrollToTOp() {
  let loaction = useLocation();
  let { pathname, hash } = loaction;
let parts = hash;
let id =parts?.slice(1);
  useEffect(() => {
    if (id) {
      const element = document.getElementById(id);
      element &&
      element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [loaction]);

  return null;
}
