import ModalPortal from "../fragment/ModalPortal";
import AddCounter from "../fragment/AddCounter";
import { useTodoContext } from "../UseTest/TodoContext";
import "../../css/toastlottie.css";

const ToastLottie = () => {
  const {todos} = useTodoContext();
  // console.log(todos,"?")
  
  return (
    <div className="box__toaselottie">
      <div className="box__toastlottie-inner">
        <ModalPortal />
        <AddCounter isLottie={true}/>
        <p>
          {todos.map((t) => (
            <li key={t.id}>{t.text}</li>
          ))}
        </p>
      </div>
    </div>
  );
};
export default ToastLottie;
