import React from 'react'
import './adddiscussion.scss'
import ImageInformationAlt from '../../../assets/images/ide-02.svg'
import Button from '../../../components/Button/Button'
import { useTranslation } from 'react-i18next'


export default function AddDiscussion() {
    const { t } = useTranslation();
    return (
        <form className="adddiscussion-main-container">
            <h1>Crear una nueva discusión</h1>
            <div className="adddiscussion-main-content">
                <div className="adddiscussion-img-content">
                </div>
                <div className="adddiscussion-information-input-content">
                    <div className="adddiscussion-input-theme">
                        <h2>Selecciona un tema </h2>
                        <ul>
                            <li>
                                <div className="adddiscussion-theme">
                                    <img src={ImageInformationAlt}></img>
                                    <h3>Informativo</h3>
                                    <span>Para dar a conocer nueva información</span>
                                </div>
                            </li>
                            <li>
                                <div className="adddiscussion-theme">
                                    <img src={ImageInformationAlt}></img>
                                    <h3>Duda</h3>
                                    <span>Para dar a conocer tus dudas</span>
                                </div>
                            </li>
                            <li>
                                <div className="adddiscussion-theme">
                                    <img src={ImageInformationAlt}></img>
                                    <h3>Regla</h3>
                                    <span>Para dar a conocer las reglas del foro</span>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="adddiscussion-input-title">
                        <h2>Ingresa el título de la discusión</h2>
                        <input type="text"></input>
                    </div>
                    <div className="adddiscussion-input-description">
                        <h2>Ingresa la descripción de la discusión</h2>
                        <textarea className="input" type="text>"></textarea>
                    </div>
                    <div className="adddiscussion-button-panel">
                            <Button styleName="primary-button" text={t("ButtonCancel")}></Button>
                            <Button styleName="primary-button" text={t("ButtonCreateDiscussion")}></Button>
                    </div>
                </div>
            </div>
        </form>
    )
}
