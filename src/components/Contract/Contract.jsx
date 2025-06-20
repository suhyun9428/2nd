import Agreement from "./Agreement";
import "../../css/contract.css";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  height: 200px;
  background: red;
`;

const Contract = () => {
  const [position, setScroll] = useState(0);
  var lastScrollY = 0;
  function onScroll() {
    setScroll(window.scrollY);
    var currentScrollY = position;

    if (currentScrollY > 100) {
      document.getElementById("root").classList.add("js-fixed");
      // return console.log(document.getElementById("root").classList);
    }
    if (currentScrollY > 220) {
      document.getElementById("root").classList.remove("js-fixed");
    }
    // lastScrollY < currentScrollY ? console.log("down") : console.log("up");

    // console.log(currentScrollY, "position");
    // lastScrollY = currentScrollY;
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <>
      <div className="box__contents-contract">
        <Box />
        <Agreement />
      </div>
    </>
  );
};
export default Contract;
