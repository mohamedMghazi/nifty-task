import PropTypes from "prop-types";
import "./style.scss";

export default function SolidButton(props) {
    const { title, type, onClick, disabled } = props;
    return (
        <button className={"solid-button"} type={type} onClick={onClick} disabled={disabled}>{title}</button>
    )
}

SolidButton.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,

}

SolidButton.defaultProps = {
    type: "button",
    disabled: false,
    onClick: () => { },
}
