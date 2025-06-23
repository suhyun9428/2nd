import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Best from "./components/Best/Best";
import Emart from "./components/Emart/Emart";
import Contract from "./components/Contract/Contract";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/week" element={<Layout />}>
        <Route index element={<Navigate to="3" replace />} />
        <Route path="1" element={<Best />} />
        <Route path="2" element={<Emart />} />
        <Route path="3" element={<Contract />} />
      </Route>
      <Route path="/" element={<Navigate to="week" replace />} />
    </Routes>
  );
}

export default App;
