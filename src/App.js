import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Edit from "./components/Edit";
import CreateUser from "./components/CreateUser";
import ListUsers from "./components/ListUsers";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:user" element={<Home />} />
        <Route path="/:user/edit" element={<Edit />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/list" element={<ListUsers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
