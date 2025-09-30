import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Best from "./components/Best/Best";
import Emart from "./components/Emart/Emart";
import Contract from "./components/Contract/Contract";
import ItemSwiper from "./components/ItemSwiper/ItemSwiper";
import AriaTest from "./components/AriaTest/AriaContext";
import FocusTest from "./components/FocusTest/FocusContext";
import ToastLottie from "./components/ToastLottie/ToastLottie";
import FilterContents from "./components/FilterLayer/FilterContents";
import UseTestContents from "./components/UseTest/UseTestContents";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/week" element={<Layout />}>
        <Route index element={<Navigate to="1" replace />} />
        <Route path="1" element={<Best />} />
        <Route path="2" element={<Emart />} />
        <Route path="3" element={<Contract />} />
        <Route path="4" element={<ItemSwiper />} />
        <Route path="5" element={<AriaTest />} />
        {/* <Route path="5" element={<FocusTest />} /> */}
        <Route path="6" element={<ToastLottie />} />
        <Route path="7" element={<FilterContents />} />
        <Route path="8" element={<UseTestContents />} />
      </Route>
      <Route path="/" element={<Navigate to="week" replace />} />
    </Routes>
  );
}

export default App;
