function useAPI(table, filter_key = "", method = "GET", data = {}) {
    const api_token = "DEc7UL2_s3lGZO3T__GnFziBxCNTZJtP";
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

    if (method === "PATCH") {
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