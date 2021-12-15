import "./addComment.scss";
import { useTranslation } from "react-i18next";
import Button from "../../button_application/Button";

export default function AddComment({ commentLenght, loadingComment, icon, className, responseComment, handleChangeComment, handleSubmitComment, handleBlurComment, formComment, errorsComment, handleClickComment }) {
    const { t } = useTranslation();
    return (
        <form onSubmit={handleSubmitComment} className="addcomment-main-container">
            <div className="addcomment-input-container">
                <textarea id="comment" name="comment" className="input" type="text" onChange={handleChangeComment} onBlur={handleBlurComment} value={formComment.comment} required></textarea>
            </div>
            <div className="addcommen-button-control">
                <div className="addcomment-count-characters">
                    <div className="system-message-container">{errorsComment.comment && <p className="errorInput">{t("ErrorComment")}</p>}</div>
                    <label htmlFor="comment">
                        {commentLenght} {t("AddCommentCharacters")}
                    </label>
                    <div className="system-message-container">
                        {loadingComment && (
                            <p className={className}>
                                {icon} {responseComment}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <Button styleName="button background-orange" onClick={handleClickComment}>
                        {t("ButtonCancel")}
                    </Button>
                </div>
                <div>
                    <Button type="submit" styleName="button background-green">
                        {t("ButtonSend")}
                    </Button>
                </div>
            </div>
            <br />
        </form>
    );
}
