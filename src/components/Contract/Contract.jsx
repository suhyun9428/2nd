// import AgreementTest from "./AgreementTest";
import Agreement from "./Agreement";
import "../../css/contract.css";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Box = styled.div`
  max-width: 768px;
  height: 250px;
  margin: 20px auto 0;
  border-radius: 16px;
  background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
`;

const Contract = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const isGoingUp = currentY < prevScrollY;
      setPrevScrollY(currentY);

      if (currentY > 100 || isGoingUp) {
        document.getElementById("root").classList.add("js-fixed");
      }
      if (currentY > 220 || !isGoingUp) {
        document.getElementById("root").classList.remove("js-fixed");
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll); // clean-up!
    };
  }, [prevScrollY]);

  return (
    <>
      <div className="box__contents-contract">
        <Box />
        {/* <AgreementTest /> */}
        <Agreement />
      </div>
    </>
  );
};
export default Contract;
