import {useRef} from "react";
import PropTypes from "prop-types";
import {CloseCircle} from "iconsax-react";
import {useClickOutsideElement} from "Utils/Hooks/useClickOutsideElement";

import "./style.scss";

export default function Modal({ title, children, onClose }) {
    const modalRef = useRef(null);

    useClickOutsideElement([modalRef], onClose);

    return (
        <div className="modal-wrapper">
            <div className="modal" ref={modalRef}>
                <div className="modal-header">
                    <h4 className="modal-title">{title}</h4>

                    <button className="close-modal" onClick={onClose}>
                        <CloseCircle size={22} />
                    </button>
                </div>

                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    title: "Modal Header",
    children: "Modal Content",
    onClose: () => { },
}
