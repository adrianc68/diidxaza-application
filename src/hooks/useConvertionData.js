export const useConvertionData = () => {
    const convertDate = (date) => {
        if (date != null) {
            let dateString = date.split(["-"]);
            let year = dateString[0];
            let month = dateString[1];
            let day = dateString[2];
            let formatDate = new Date(year, month - 1, day);
            let options = { year: "numeric", month: "long", day: "numeric" };
            return formatDate.toLocaleDateString("es-ES", options);
        }
    };

    const timeAgoFromNow = (milisecondsParameter) => {
        const MILISECONDS_IN_SECOND = 1000;
        const MILISECONDS_IN_MINUTE = MILISECONDS_IN_SECOND * 60;
        const MILISECONDS_IN_HOUR = MILISECONDS_IN_MINUTE * 60;
        const MILISECONDS_IN_DAY = MILISECONDS_IN_HOUR * 24;
        const MILISECONDS_IN_MONTH = MILISECONDS_IN_DAY * 30;
        const BYNARY_BASE = 10;

        let milisecondsNow = Date.now();
        let milisecondsDifference = milisecondsNow - milisecondsParameter;
        switch (true) {
            case milisecondsDifference < MILISECONDS_IN_MINUTE:
                return parseInt(milisecondsDifference / MILISECONDS_IN_SECOND, BYNARY_BASE) + " s.";
            case milisecondsDifference < MILISECONDS_IN_HOUR:
                return parseInt(milisecondsDifference / MILISECONDS_IN_MINUTE, BYNARY_BASE) + " min.";
            case milisecondsDifference < MILISECONDS_IN_DAY:
                return parseInt(milisecondsDifference / MILISECONDS_IN_HOUR, BYNARY_BASE) + " hr.";
            case milisecondsDifference < MILISECONDS_IN_MONTH:
                return parseInt(milisecondsDifference / MILISECONDS_IN_DAY, BYNARY_BASE) + " $day";
            default:
                let dateString = new Date(milisecondsParameter).toLocaleDateString("es-ES");
                return dateString;
        }
    };

    return {
        convertDate,
        timeAgoFromNow,
    };
};
