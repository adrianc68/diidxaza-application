import './discussionlistitem.scss'
import { useTranslation } from "react-i18next";
import { AiOutlineComment } from 'react-icons/ai';
import { useConvertionData } from '../../../hooks/useConvertionData'
export default function DiscussionListItem(props) {
    const discussion = props.discussion;
    const { t } = useTranslation();
    const { convertDate } = useConvertionData();
    return (
        <div className="forum-discussion-search-listItem">
            <div className="forum-discussion-listItem-description">
                <div className="forum-listItem-theme">
                    <span>{discussion.theme}</span>
                </div>
                <div className="forum-listItem-open-status">
                    <span><AiOutlineComment /> {discussion.numberComments}</span>
                </div>
            </div>
            <div className="forum-listItem-data-content">
                <div className="forum-listItem-data-content-title">
                    <span className="semibold">{discussion.title}</span>
                </div>
                <div className="forum-listItem-data-content-date">
                    <span>{t("DiscussionlistitemDate")}</span>
                    <span>{convertDate(discussion.dateCreation)}</span>
                </div>
            </div>
        </div>
    )
}
