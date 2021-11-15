import './discussionlistitem.scss'
import { useTranslation } from "react-i18next";
import {AiOutlineComment} from 'react-icons/ai';

export default function DiscussionListItem(props) {
    const discussion = props.discussion;
    const { t } = useTranslation();
    return (
        <div className="forum-discussion-search-listItem">
            <div className="forum-discussion-listItem-description">
                <div className="forum-listItem-theme">
                    <span>{discussion.theme}</span>
                </div>
                <div className="forum-listItem-open-status">
                    <span><AiOutlineComment/> {discussion.numberComments}</span>
                </div>
            </div>
            <div className="forum-listItem-data-content">
                <span>{discussion.title}</span>
                <p>{t("DiscussionlistitemDate")}{discussion.dateCreation}</p>
            </div> 
        </div>
    )
}
