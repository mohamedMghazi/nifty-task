import {useEffect} from "react";
import Layout from "./Layout";
import API from "./Utils/API";

export default function App() {
    const { apiPromise } = API({ endpoint: '' });

    // Wake the server up on the first load of the app to prevent cold starts (as I deployed it on free tier).
    useEffect(() => {
        apiPromise.catch((err) => {
            // TODO: handle error properly (show a toast or something) instead of logging it to the console.
            console.error('Error:', err);
        });

        return () => {
            apiPromise.abort();
        };
    }, [apiPromise]);

    return (
        <main id="nifty-task-wrapper" data-testid={"nifty-task-wrapper"}>
            <Layout />
        </main>
    );
}
