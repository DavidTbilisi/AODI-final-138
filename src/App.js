import "./App.css";


import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/:user" element={<Home />} />
        <Route path="/:user/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;