function useAPI(table,  filter_key = "", method = "GET", data = {}) {
    const api_token = "a9sBjpY_Ot21kMmJMM9QwBhMc8kN_sqy";
    const base_url = "http://localhost:8055/items";

    if (filter_key === "") {
        return fetch(`${base_url}/${table}`, {
            method: method,
            headers: {
                Authorization: `Bearer ${api_token}`,
            }
        })
        .then(response => response.json())
        .then(data => data.data);
    }

    if (method === "POST") {
        return fetch(`${base_url}/${table}`, {
            method: method,
            headers: {
                Authorization: `Bearer ${api_token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    return fetch(`${base_url}/${table}?filter[username][_eq]=${filter_key}`, {
        method: method,
        headers: {
            Authorization: `Bearer ${api_token}`,
        }
    })
    .then(response => response.json())
    .then(data => data.data);
}


export default useAPI;