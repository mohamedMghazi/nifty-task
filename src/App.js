import {useEffect} from "react";
import Layout from "Layout";
import API from "Utils/API";

export default function App() {
    useEffect(() => {
        // Wake the server up on the first load of the app to prevent cold starts (as I deployed it on free tier).
        const { apiResponse, abort } = API({ endpoint: '' });

        apiResponse().catch((err) => {
            console.error('Error:', err);
        });

        return () => {
            abort();
        };
    }, []);

    return (
        <main id="nifty-task-wrapper" data-testid={"nifty-task-wrapper"}>
            <Layout />
        </main>
    );
}
