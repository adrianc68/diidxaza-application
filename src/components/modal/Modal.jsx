import "./modal.scss";
import Button from "../button_application/Button";
import PropTypes from "prop-types";
import { AiFillCloseSquare } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function Modal({ title, children, handleModal, sizeWidth, sizeHeight }) {
    const { t } = useTranslation();
    const style = {
        width: sizeWidth,
        height: sizeHeight,
    };

    return (
        <main aria-label={t("ariaLabelModal")} className="modal-container-main">
            <div className="modal-container-content">
                <div className="modal-content-container" style={style}>
                    <div className="modal-title-container">
                        <h1>{title}</h1>
                        <Button styleName="modal-button" ariaLabel={t("ButtonClose")}>
                            <AiFillCloseSquare size={30} onClick={handleModal} />
                        </Button>
                    </div>
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        </main>
    );
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};
