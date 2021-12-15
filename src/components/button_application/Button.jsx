import React from "react";
import "./primaryButton.scss";
import "./secondaryButton.scss";
import "./iconButton.scss";
import "./textButton.scss";
import "./modalButton.scss";
import "./greenButton.scss";
import "./darkBlueButton.scss";
import "./orangeButton.scss";
import "./resizableButton.scss";
import "./buttonStyle.scss";

export default function Button(props) {
    return (
        <button className={props.styleName} onClick={props.onClick} aria-label={props.ariaLabel}>
            <div className="button-container">
                {props.children}
                <span>{props.text}</span>
            </div>
        </button>
    );
}
