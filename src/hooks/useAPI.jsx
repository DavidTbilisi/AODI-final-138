import { useState, useEffect } from 'react';

function useAPI(table, method = "GET") {
    const api_token = "a9sBjpY_Ot21kMmJMM9QwBhMc8kN_sqy";
    const base_url = "http://localhost:8055/items/";

    return fetch(base_url + table, {
        method: method,
        headers: {
            Authorization: `Bearer ${api_token}`,
        }
    })
    .then(response => response.json())
    .then(data => data.data);
}

export default useAPI;