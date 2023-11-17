import PropTypes from "prop-types";
import LoadingIndicator from "Components/LoadingIndicator";
import "./style.scss";

export default function SolidButton(props) {
    const { title, type, onClick, loading, loadingElement } = props;
    return (
        <button className={"solid-button"} type={type} onClick={onClick} disabled={loading}>
            {loading ? loadingElement : title}
        </button>
    )
}

SolidButton.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    loading: PropTypes.bool,
    loadingElement: PropTypes.element,
}

SolidButton.defaultProps = {
    type: "button",
    loading: false,
    onClick: () => { },
    loadingElement: <LoadingIndicator />,
}
