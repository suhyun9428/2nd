import { createPortal } from "react-dom";
import { useState, useEffect } from 'react';
const ModalContent = () => {
  return(
    <div className="box__toast">
      <span className="text">토스트 팝업입니다.</span>
    </div>
  )
}
const ModalPortal = ({}) =>{
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  }, [showModal]);

  return (
    <>
      <button type="button" className="button__toast" onClick={()=>setShowModal(true)}>토스트 뿅</button>
      {showModal && createPortal(<ModalContent />, document.body)}
    </>
  )
}
export default ModalPortal;