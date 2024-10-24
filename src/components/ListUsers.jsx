import { useEffect } from "react";
import { getUser, removeUser } from "../cvReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ListUsers() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);


    const users = useSelector((state) => state.cv.data.user);
    console.log("Users: ", users);

    function handleDelete(id) {
        console.log("Deleting user with id: ", id);
        dispatch(removeUser(id));
    }

    function handleView(id) {
        console.log("Viewing user");
        navigate(`/${id}`);
    }
    function handleEdit(username) {
        console.log("Viewing user");
        navigate(`/${username}/edit`);
    }

    return (
        <>
            <h1>List of Users</h1>
            {Object.keys(users).length && users.map((user) => (
                <ul key={user.id}>
                    <li>{user.username} - {user.name} {user.surname}  - {user.date_created}
                        <button onClick={() => handleView(user.id)}>view</button>
                        <button onClick={() => handleEdit(user.username)}>edit</button>
                        <button onClick={() => handleDelete(user.id)}>delete</button>
                    </li>
                </ul>
            ))}
        </>
    )
}

export default ListUsers;