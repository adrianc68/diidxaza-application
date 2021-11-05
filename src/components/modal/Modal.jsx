import React from 'react'
import './modal.scss'
import Button from '../../components/Button/Button'
import { IoIosClose } from 'react-icons/io'
import PropTypes from 'prop-types';


export default function Modal({ title, children }) {
    return (
        <div className="modal-container">
            <div className="modal-content-container">
                <div className="modal-title-container">
                    <h1>{title}</h1>
                    <div className="modal-control-buttons">
                        <Button styleName="icon-button">
                            <IoIosClose className="icon-button" />
                        </Button>
                    </div>
                </div>
                <div className="modal-content">
                    {children}
                </div>

            </div>
        </div>
    )

}


Modal.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}