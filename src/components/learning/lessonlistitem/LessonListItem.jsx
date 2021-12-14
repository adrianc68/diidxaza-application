import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { FcReading } from "react-icons/fc";
import "react-circular-progressbar/dist/styles.css";
import "./lessonListItem.scss";

export default function LessonListItem(props) {
    return (
        <div className="lessonlistitem-main-container">
            <div className="lessonlistitem-content">
                <CircularProgressbarWithChildren value={props.isRecordHistory !== undefined && 100}>
                    <FcReading size={70} />
                </CircularProgressbarWithChildren>
                <p>{props.lesson.name}</p>
            </div>
        </div>
    );
}
