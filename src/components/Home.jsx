import Profile from "./Profile";
import ExpEdu from "./ExpEdu";
import Information from "./Information";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../cvReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Home() {
    let { user } = useParams();

    const data = useSelector((state) => state.cv.data.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(user));
    }, [dispatch, user]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flexbox">
                <div id="left-col">
                    <Profile {...data} />
                    <Information {...data} />
                </div>

                <div id="right-col">
                    <ExpEdu />
                </div>
            </div>
        </>
    )
}

export default Home;