import './discussionlistitem.scss'

export default function DiscussionListItem() {
    return (
        <div className="forum-discussion-search-listItem">
            <div className="forum-discussion-listItem-description">
                <div className="forum-listItem-theme">
                    <span>Tema</span>
                </div>
                <div className="forum-listItem-open-status">
                    <span>Abierto</span>
                </div>
            </div>
            <div className="forum-listItem-data-content">
                <span>¿Como crear los procedimientos de acuerdo a lo estudiado en la primera sección de lo que acontece?</span>
            </div>
        </div>
    )
}
