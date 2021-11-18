import React from 'react'
import './blockuser.scss'
import Button from '../../Button/Button'

export default function BlockUser({primaryButton, secondaryButton, content, handlePrimary, setStatusModal}) {

    return (
        <div className="blockuser-main-container">
            <div className="blockuser-content-container">
                <div className="blockuser-text">
                    <p>{content}</p>
                </div>
                <div className="blockuser-button-panel">
                    <Button styleName="dark-blue-button" text={primaryButton} onClick={handlePrimary}></Button>
                    <Button styleName="primary-button" text={secondaryButton} onClick= {()=>setStatusModal(false)}></Button>
                </div>
            </div>
        </div>
    )
}
