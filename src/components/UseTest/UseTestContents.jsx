import Todos from "./Todos";
import { TodoProvider } from "./TodoContext";
import ToastLottie from "../ToastLottie/ToastLottie";

const UseTestContest = () => {
  return(
    <TodoProvider>
      <Todos />
      <ToastLottie />
    </TodoProvider>
  )
}

export default UseTestContest;