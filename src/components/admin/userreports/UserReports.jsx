import React from 'react'
import Button from '../../Button/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import './userreports.scss'
import UserImageDefault from '../../../assets/images/ide-29.svg'

export default function UserReports() {
    const { t } = useTranslation();

    return (
        <div className="userreports-main-container">
            <div className="userreports-data-container">
                <div className="userreports-image-background">
                    <img src={UserImageDefault}></img>
                </div>
                <p>{t("UserReportAdminPanelDescription")}</p>
                <div className="userreports-list-container">
                    {/* PUT REPORT COMPONENT */}
                    <ul>
                        <li>
                            <div className="report-container">
                                <div className="report-numeration-container">
                                    <span>{t("UserReportNumberReport")}</span>
                                    <span>1</span>
                                </div>
                                <div className="report-data-container">
                                    <div className="report-reported-by-container">
                                        <span>{t("UserReportReportedBy")}</span>
                                        <span>Pedro Pedraza</span>
                                    </div>
                                    <div className="report-descripction-container">
                                        <span>{t("UserReportReason")}</span>
                                        <span>La razón del reporte es que este usuario ha estado haciendo spam</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="report-container">
                                <div className="report-numeration-container">
                                    <span>{t("UserReportNumberReport")}</span>
                                    <span>123432</span>
                                </div>
                                <div className="report-data-container">
                                    <div className="report-reported-by-container">
                                        <span>{t("UserReportReportedBy")}</span>
                                        <span>Pedro Pedraza</span>
                                    </div>
                                    <div className="report-descripction-container">
                                        <span>{t("UserReportReason")}</span>
                                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus tempora atque maiores quia quidem delectus reiciendis esse quam blanditiis? Provident modi repudiandae, corporis odio doloribus aut tenetur minus aspernatur excepturi, voluptatum velit enim maiores itaque quibusdam dolorum autem laudantium sunt dignissimos ut ad, quis deleniti nesciunt qui ipsam? Sed ut nostrum a, vero adipisci earum expedita voluptatem perferendis. Nemo consectetur nisi sequi perspiciatis ipsam dolorem perferendis ipsum aperiam. Nulla architecto distinctio laborum aperiam, quia ratione quis consectetur exercitationem asperiores? Numquam, nostrum blanditiis? A eius modi reprehenderit voluptatibus quae neque rerum deserunt! Expedita necessitatibus adipisci possimus veritatis molestiae ducimus ab sunt suscipit iste earum est aut, assumenda vel. Quae eaque laboriosam labore dolores, dolorum aliquam expedita voluptatem facilis, praesentium excepturi eligendi perferendis explicabo earum veritatis debitis saepe et nostrum vitae dolor ea! Laboriosam libero atque molestiae quam tempore cum excepturi fugit dolore, possimus nostrum officiis doloremque accusamus nulla perferendis dignissimos consequuntur delectus? Voluptas veniam non enim dignissimos laboriosam magni quo, rem eligendi facilis porro cum dicta explicabo error esse fuga pariatur inventore quidem voluptatum similique sed? Id, magni. Dolore earum animi velit natus exercitationem quibusdam consequatur. Ullam aperiam alias aliquid deleniti, odit debitis? Debitis a necessitatibus inventore eum quibusdam odio quasi, hic rerum veritatis dolores iste libero consequatur vero porro soluta eveniet, vitae voluptas sit. Eveniet, obcaecati pariatur ducimus accusamus provident culpa mollitia, sit praesentium minima voluptatum atque voluptatibus voluptatem. At corporis sit magni, consequuntur officiis a amet consectetur esse alias unde consequatur, ad officia atque beatae! Nihil qui doloribus amet distinctio debitis. Sapiente obcaecati consequuntur voluptatum maiores nostrum. Mollitia dolorem temporibus rem unde rerum tempore voluptas obcaecati ducimus voluptate alias reiciendis ratione in voluptates esse error, assumenda, explicabo autem, repellendus praesentium! Excepturi optio in, sunt porro tempora tempore, placeat ullam dolore sed eaque vel animi debitis quae mollitia doloremque eum sint repudiandae, molestias sit eius! Doloremque ipsum et facere impedit magnam, nesciunt quos distinctio fuga nostrum sapiente molestias culpa suscipit est pariatur quisquam ad aperiam cum quo enim ab qui natus ut eveniet praesentium! Eligendi sint repellendus atque maxime blanditiis ipsam delectus cupiditate veniam repudiandae corporis aspernatur vitae, nostrum minus ullam ipsum quaerat ipsa? Minus, rem eligendi cupiditate quo dolores voluptatem explicabo quisquam quas sint aliquid labore, repudiandae unde mollitia iure ut! Nisi eius veniam id fugiat, eligendi rerum a doloremque provident, nam ipsa, esse saepe aspernatur harum facilis dolor numquam commodi porro nesciunt debitis dignissimos officiis? Aspernatur neque voluptatibus dolores ullam dolor, inventore suscipit quod quam autem et omnis laborum, corporis, sapiente aperiam? Qui, magnam beatae earum dolores aliquam harum vel autem eaque cumque tenetur molestiae, soluta libero quibusdam temporibus eos! Adipisci officia, sunt id doloremque deleniti, alias sed ad nemo sint doloribus quisquam, dicta veritatis saepe est ducimus nam eos dolor corrupti laboriosam nulla architecto. Iure repudiandae eos rem explicabo veritatis nisi fugiat illo aliquam corrupti, nostrum quam, eius consectetur a velit animi rerum. Nisi vero, exercitationem non, tempore maiores dolore eius id, consequatur beatae fugit quae! Minima explicabo libero at natus ea rerum sit, iste consectetur optio nisi quasi commodi exercitationem omnis molestiae, accusantium error? Quibusdam debitis nobis incidunt ad rem eius placeat, adipisci ratione consectetur magni mollitia, totam ullam aut porro labore fuga cum delectus reprehenderit dolorem molestiae perferendis voluptates vel! Aut modi magnam distinctio, nihil sapiente inventore quasi mollitia fuga illo dolore, quam, voluptas dicta.</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}
