import Info from "./Info";
import {useState, useEffect} from 'react';

const api_token = "ikfRi0pb6C3E9AugagcXj4ySxjbE3Muw";
const base_url = "http://localhost:8055/items/users";

function Information() {
    const list_title = 'Industry Knowledge';

    const [list, setList] = useState([
        {
            "id": 1,
            "status": "draft",
            "sort": null,
            "user_created": "0ba92a7c-5ac6-4db6-b061-1c831243a97b",
            "date_created": "2024-10-16T06:51:48.446Z",
            "industry_name": "UI/UX Design"
        },
        {
            "id": 2,
            "status": "draft",
            "sort": null,
            "user_created": "0ba92a7c-5ac6-4db6-b061-1c831243a97b",
            "date_created": "2024-10-16T06:52:05.961Z",
            "industry_name": "Web Design"
        }
    ]);

    useEffect(() => {
        fetch('http://localhost:8055/items/industries', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${api_token}`,
            }
        })
        .then(response => response.json())
        .then(data => {
            setList(data.data);
        });
    }
    , []);


    const info = {
        phone: '+995 593 55 55 55',
        email: 'davidchincharashvili@gmail.com',
        pin_drop: 'Tbilisi',
    }


    return (
        <>
            
            {Object.keys(info).map(key => <Info key={key} text={info[key]} />)}
            <Info list_tilte={list_title} list={list} />
        </>
    )
}

export default Information;