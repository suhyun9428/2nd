import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Best from "./components/Best/Best";
import Week2 from "./components/Week2/Week2";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/week" element={<Layout />}>
        <Route index element={<Navigate to="/week/1" replace />} />
        <Route path="1" element={<Best />} />
        <Route path="2" element={<Week2 />} />
      </Route>
      <Route path="/" element={<Navigate to="/week" replace />} />
    </Routes>
  );
}

export default App;
