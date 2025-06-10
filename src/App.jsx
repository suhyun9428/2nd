import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Best from "./components/Best/Best";
import Week2 from "./components/Week2/Week2";
import Week3 from "./components/Week3/Week3";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/week" element={<Layout />}>
        <Route index element={<Navigate to="1" replace />} />
        <Route path="1" element={<Best />} />
        <Route path="2" element={<Week2 />} />
        <Route path="3" element={<Week3 />} />
      </Route>
      <Route path="/" element={<Navigate to="week" replace />} />
    </Routes>
  );
}

export default App;
