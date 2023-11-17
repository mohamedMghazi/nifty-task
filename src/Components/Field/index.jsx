import PropTypes from "prop-types";
import "./style.scss";

export default function Field(props) {
    const { title, type, name, placeholder, value, onChange, error, ...rest } = props;

    const updateValue = (event) => {
        onChange(event.target.value);
    }

    return (
        <div className={"field-container"}>
            {title && <label htmlFor={name}>{title}</label>}
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                onChange={updateValue}
                data-testid={name}
                data-error={!!error}
                {...rest}
            />

            {!!error && <p className={"field-error"}>{error}</p>}
        </div>
    )
}

Field.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
}
