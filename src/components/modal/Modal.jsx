import "./modal.scss";
import Button from "../button_application/Button";
import PropTypes from "prop-types";
import { AiFillCloseSquare } from "react-icons/ai";

export default function Modal({ title, children, handleModal, sizeWidth, sizeHeight }) {
    const style = {
        width: sizeWidth,
        height: sizeHeight,
    };

    return (
        <div className="modal-container-main">
            <div className="modal-container-content">
                <div className="modal-content-container" style={style}>
                    <div className="modal-title-container">
                        <h2>{title}</h2>
                        <Button styleName="modal-button">
                            <AiFillCloseSquare size={30} onClick={handleModal} />
                        </Button>
                    </div>
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};
