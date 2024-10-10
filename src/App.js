import Profile from "./Profile";
import ExpEdu from "./ExpEdu";
import "./App.css";
import Information from "./Information";
import { useEffect, useState } from "react";

const api_token = 'McyHJahHWO1LHcTXxgq_vwRpsVGctX9h';
const base_url = 'http://localhost:8055/items/users'

function App() {
  const [user, setUser] = useState({
    "name": "David",
    "surname": "Chincharashvili",
    "profession": "It Specialist",
  }); 

  // useEffect(() => {
  //   fetch(base_url, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${api_token}`
  //     }
  //   }).then(response => response.json())
  //     .then(data => console.log(data))
  // })


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
