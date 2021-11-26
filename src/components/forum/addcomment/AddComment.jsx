import "./addcomment.scss";
import {useTranslation} from "react-i18next";
import Button from "../../../components/Button/Button";

export default function AddComment({commentLenght,loadingComment,icon,className,responseComment,handleChangeComment,handleSubmitComment,handleBlurComment,formComment,errorsComment,handleClickComment}) {
    const { t } = useTranslation();
    return (
        <form onSubmit={handleSubmitComment} className="addcomment-main-container">
            <div className="addcomment-input-container">
                <textarea name="comment" className="input" type="text" onChange={handleChangeComment} onBlur={handleBlurComment} value={formComment.comment} required></textarea>
            </div>
            <div className="addcommen-button-control">
                <div className="addcomment-count-characters">
                    <div className="system-message-container">
                        {errorsComment.comment && <p className="errorInput">{t("ErrorComment")}</p>}
                    </div>
                    <span>{commentLenght} {t("AddCommentCharacters")}</span>
                    <div className="system-message-container">
                        {loadingComment && <p className={className}>{icon}  {responseComment}</p>}
                    </div>
                </div>
                <div>
                    <Button styleName="orange-button" onClick={handleClickComment}>{t("ButtonCancel")}</Button>
                </div>
                <div>
                    <Button type="submit" styleName="green-button">{t("ButtonSend")}</Button>
                </div>
            </div>
            <br/>
        </form>
    )
}
