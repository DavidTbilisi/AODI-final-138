import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "../cvReducer";

function Edit() {
    let { user } = useParams();
    const data = useSelector((state) => state.cv.data.user);
    const [data2, setData2] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
        profession: ''
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(user));
    }, [dispatch, user]);

    useEffect(() => {
        if (data) {
            setData2({
                name: data.name || '', // Fallback to an empty string if undefined
                surname: data.surname || '',
                email: data.email || '',
                phone: data.phone || '',
                address: data.address || '',
                profession: data.profession || ''
            });
        }
    }, [data]);

    function handleChange(e) {
        const { name, value } = e.target;
        setData2({ ...data2, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevents default refresh by the browser
        dispatch(setUser(data2));
    }

    if (!data.name) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>Edit {user} CV page</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={data2.name || ''} // Ensures value is always a string
                />

                <label htmlFor="surname">SurName</label>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    onChange={handleChange}
                    value={data2.surname || ''}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={data2.email || ''}
                />

                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                    value={data2.phone || ''}
                />

                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={handleChange}
                    value={data2.address || ''}
                />

                <label htmlFor="profession">Profession</label>
                <input
                    type="text"
                    id="profession"
                    name="profession"
                    onChange={handleChange}
                    value={data2.profession || ''}
                />

                <button type="submit">Submit</button>
            </form>
        </>
    );
}


export default Edit;