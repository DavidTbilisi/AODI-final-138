import Profile from "./components/Profile";
import ExpEdu from "./components/ExpEdu";
import "./App.css";
import Information from "./components/Information";
import { useEffect, useState } from "react";

const api_token = "ikfRi0pb6C3E9AugagcXj4ySxjbE3Muw";
const base_url = "http://localhost:8055/items/users";

function App() {
  const [user, setUser] = useState({
    name: "David",
    surname: "Chincharashvili",
    profession: "It Specialist",
  });

  useEffect(() => {
    fetch(base_url + "?filter[name][_eq]=David", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${api_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.data[0]);
      });
  }, []);

  return (
    <div className="container">
      <div className="flexbox">
        <div>
          <Profile {...user} />
          <Information />
        </div>

        <div>
          <ExpEdu />
        </div>
      </div>
    </div>
  );
}

export default App;
