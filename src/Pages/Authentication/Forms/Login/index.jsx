import {useState} from "react";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

import API from "Utils/API";
import checkFormValidation from "Utils/Hooks/checkFormValidation";
import CookiesManager from "Utils/Storage/CookiesManager";

import Field from "Components/Field";
import SolidButton from "Components/SolidButton";

export default function Login() {
    const Cookies = new CookiesManager(30);
    const navigate = useNavigate();

    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ email: "", password: "", api: "" });

    /**
     * A function that handles the login form submission.
     * It will check if the form is valid, if not, it will set the errors state and return.
     * If the form is valid, it will send a request to the API.
     *
     * @param e
     */
    const { apiResponse } = API({ endpoint: 'auth/login', method: "POST", data: form });
    const handleLogin = (e) => {
        e.preventDefault();

        const {isValid, errors} = checkFormValidation(form, ["email", "password"]);

        if (!isValid) {
            return setErrors(errors);
        }

        setLoading(true);
        apiResponse()
            .then(({ data, status }) => {
                if (status === 200) {
                    Cookies.set("X-USER-DATA", data.user);
                    Cookies.set("X-USER-TOKEN", data.token);
                    navigate("/", { replace: true });
                } else if (status >= 400 && status < 500) {
                    setErrors({...data.errors });
                } else {
                    setErrors({
                        email: "",
                        password: "",
                        api: { msg: "Something went wrong. Please try again later." }
                    });
                }
            })
            .catch((e) => {
                if (e?.response && e?.response?.data) {
                    const { errors } = e.response.data;
                    setErrors(errors);
                }
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleChange = (key, value) =>
        setForm(prevState => ({ ...prevState, [key]: value }));


    return (
        <section className={"authentication-form-container"}>
            <h2>Welcome back!</h2>

            <form onSubmit={handleLogin}>
                <Field
                    title={"Email address"}
                    type={"email"}
                    name={"email"}
                    placeholder={"example@niftytask.com"}
                    value={form.email}
                    onChange={(email) => handleChange("email", email)}
                    error={errors.email ? errors.email["msg"] : null}
                    autoComplete={"email"}
                />

                <Field
                    title={"Password"}
                    type={"password"}
                    name={"password"}
                    placeholder={"••••••••"}
                    value={form.password}
                    onChange={(password) => handleChange("password", password)}
                    error={errors.password ? errors.password["msg"] : null}
                    autoComplete={"current-password"}
                />

                {!!errors.api?.msg && <p className={"form-error"}>{errors.api?.msg}</p>}

                <SolidButton
                    title={"Login"}
                    type={"submit"}
                    loading={loading}
                />
            </form>

            <div className={"form-link"}>
                Create an account?&nbsp;
                <Link to={"/auth/register"}>
                    Sign up
                </Link>
            </div>
        </section>
    )
}
