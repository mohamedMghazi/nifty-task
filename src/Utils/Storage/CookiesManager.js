class CookieManager {
    /**
     * Creates an instance of CookieManager.
     * @param {number} [expirationDays=30] - The expiration time for the cookies in days. Defaults to 30 days.
     */
    constructor(expirationDays = 30) {
        this.expirationDays = expirationDays;
    }

    /**
     * Creates a new cookie or updates an existing cookie with the provided key, value, and expiration.
     * @param {string} key - The key or identifier for the cookie.
     * @param {string|Object} value - The value to store in the cookie. If an object is provided, it will be converted to a string using JSON.stringify().
     * @param {number} [expirationDays] - The expiration time for the cookie in days. If not specified, the default expiration time set during initialization will be used.
     */
    set(key, value, expirationDays = this.expirationDays) {
        try {
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
        } catch (error) {
            console.error(`Error converting value to JSON: ${error.message}`);
            return;
        }

        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + expirationDays * 24 * 60 * 60 * 1000);
        const expires = "; expires=" + expirationDate.toGMTString();
        document.cookie = `${key}=${value}${expires}; path=/`;
    }

    /**
     * Retrieves the value of the cookie associated with the provided key.
     * @param {string} key - The key or identifier for the cookie.
     * @returns {string|Object|null} The value of the cookie, or null if the cookie does not exist.
     */
    get(key) {
        let value = null;
        const nameEQ = `${key}=`;
        const cookies = document.cookie.split(';');

        for (let i = 0, max = cookies.length; i < max; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }

            if (cookie.indexOf(nameEQ) === 0) {
                const cookieValue = cookie.substring(nameEQ.length);
                try {
                    value = JSON.parse(cookieValue);
                } catch (error) {
                    value = cookieValue;
                }
                break;
            }
        }

        return value;
    }

    /**
     * Removes the cookie associated with the provided key.
     * @param {string} key - The key or identifier for the cookie.
     */
    remove(key) {
        document.cookie = `${key}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }
}

export default CookieManager;
