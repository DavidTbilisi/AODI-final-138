import { selectData, useDispatch } from "react-redux";
import { createUser } from "../cvReducer";
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const dispatch = useDispatch();
    const redirect = useNavigate();
    
    const handleClick = () => {
        const data = {
            name: 'John',
            surname: 'Doe',
            username: 'User100000',
        }
        dispatch(createUser(data));
        return redirect('/User100000/edit');
    }

    return (
        <>
            <button onClick={handleClick}>Create User Component</button>
        </>
    )
}

export default CreateUser;