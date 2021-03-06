import "./alertConfirmation.scss";
import Button from "../button_application/Button";

export default function AlertConfirmation({ primaryButton, secondaryButton, content, handlePrimary, setStatusModal }) {
    return (
        <div className="alert-confirmation-main-container">
            <div className="alert-confirmation-content-container">
                <div className="alert-confirmation-text">
                    <p>{content}</p>
                </div>
                <div className="alert-confirmation-button-panel">
                    <Button styleName="button background-dark-blue" text={primaryButton} onClick={handlePrimary}></Button>
                    <Button styleName="button" text={secondaryButton} onClick={() => setStatusModal(false)}></Button>
                </div>
            </div>
        </div>
    );
}
