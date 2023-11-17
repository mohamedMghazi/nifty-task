import CookieManager from "../Storage/CookiesManager";

function _handleError(err) {
    if (err.name === "AbortError") {
        console.error("Request aborted");
    } else if (err.name === "TypeError") {
        console.error("500 Server Error");
    } else {
        console.error("Unexpected error:", err);
    }
}

function BaseURL(environment) {
    const baseURLs = {
        development: process.env.REACT_APP_DEVELOP_SERVER,
        production: process.env.REACT_APP_PRODUCTION_SERVER,
    };

    return baseURLs[environment];
}

function API({ endpoint, method = "GET", data = {} }) {
    const cookies = new CookieManager();

    const controller = new AbortController();
    const signal = controller.signal;

    const body = method !== "GET" && method !== "DELETE" ? JSON.stringify(data) : null;

    const url = `${BaseURL(process.env.REACT_APP_MODE) ?? process.env.REACT_APP_PRODUCTION_SERVER}/${endpoint}`;

    const headers = { Authorization: `${cookies.get("X-USER-TOKEN")}`, "Content-Type": "application/json" };

    const fetchOptions = { method, headers, body, mode: "cors", signal };

    const apiResponse = async () => {
        try {
            const response = await fetch(url, fetchOptions);
            const responseData = await response.json();

            if (!signal.aborted) {
                return { data: responseData, status: response.status };
            }
        } catch (err) {
            if (!signal.aborted) {
                _handleError(err);
            }
        }
    };

    const abort = () => {
        controller.abort();
    };

    return { apiResponse, abort };
}

export default API;
