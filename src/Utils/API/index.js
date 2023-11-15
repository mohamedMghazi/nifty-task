import { useState } from 'react';

function _handleError(err, setError) {
    if (err.name === "AbortError") {
        console.log("Request aborted");
    } else if (err.name === "TypeError") {
        setError("500 Server Error");
    } else {
        console.error("Unexpected error:", err);
        setError("Unexpected error occurred");
    }
}

function BaseURL(environment) {
    const baseURLs = {
        development: process.env.REACT_APP_DEVELOP_SERVER,
        production: process.env.REACT_APP_PRODUCTION_SERVER,
    };

    return baseURLs[environment];
}

export default function API({ endpoint, method = "GET", data = {} }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const controller = new AbortController();
    const signal = controller.signal;

    const body = method !== "GET" && method !== "DELETE" ? data : null;

    const url = `${BaseURL(process.env.REACT_APP_MODE) ?? process.env.REACT_APP_PRODUCTION_SERVER}/${endpoint}`;

    const headers = { Authorization: `Bearer `, "Content-Type": "application/json" };

    const fetchOptions = { method, headers, body, mode: "cors", signal }

    const apiPromise = new Promise((resolve, reject) => {
        fetch(url, fetchOptions)
            .then(response => response.json())
            .then(responseData => {
                if (!signal.aborted) {
                    resolve({ data: responseData, status: responseData.status });
                    setLoading(false);
                }
            })
            .catch(err => {
                if (!signal.aborted) {
                    _handleError(err, setError);
                    reject(err);
                    setLoading(false);
                }
            });
    });

    apiPromise.abort = function () {
        controller.abort();
    };

    return { apiPromise, loading, error };
}
