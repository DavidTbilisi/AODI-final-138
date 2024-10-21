import "./App.css";

import Profile from "./components/Profile";
import ExpEdu from "./components/ExpEdu";
import Information from "./components/Information";

import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./cvReducer";
import { useEffect } from "react";

function App() {
  const data = useSelector((state) => state.cv.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  console.log(data);
  if (!data || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="flexbox">
        <div id="left-col">
          <Profile {...data[0]} />
          <Information {...data[0]} />
        </div>

        <div id="right-col">
          <ExpEdu />
        </div>
      </div>
    </div>
  );
}

export default App;