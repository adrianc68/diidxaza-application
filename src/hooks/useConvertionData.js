export const useConvertionData = () => {
  const convertDate = (date) => {
    if (date != null) {
      var dateString = date.split(["-"]);
      var year = dateString[0];
      var month = dateString[1];
      var day = dateString[2];
      var formatDate = new Date(year, month - 1, day);
      var options = { year: "numeric", month: "long", day: "numeric" };
      return formatDate.toLocaleDateString("es-ES", options);
    }
  };

  const timeAgoFromNow = (milisecondsParameter) => {
    var MILISECONDS_IN_SECOND = 1000;
    var MILISECONDS_IN_MINUTE = MILISECONDS_IN_SECOND * 60;
    var MILISECONDS_IN_HOUR = MILISECONDS_IN_MINUTE * 60;
    var MILISECONDS_IN_DAY = MILISECONDS_IN_HOUR * 24;
    var MILISECONDS_IN_MONTH = MILISECONDS_IN_DAY * 30;

    var milisecondsNow = Date.now();
    var milisecondsDifference = milisecondsNow - milisecondsParameter;

    switch (true) {
      case milisecondsDifference < MILISECONDS_IN_MINUTE:
        return (
          parseInt(milisecondsDifference / MILISECONDS_IN_SECOND) +
          " s."
        );
      case milisecondsDifference < MILISECONDS_IN_HOUR:
        return (
          parseInt(milisecondsDifference / MILISECONDS_IN_MINUTE) +
          " min."
        );
      case milisecondsDifference < MILISECONDS_IN_DAY:
        return (
          parseInt(milisecondsDifference / MILISECONDS_IN_HOUR) + " hr."
        );
      case milisecondsDifference < MILISECONDS_IN_MONTH:
        return (
          parseInt(milisecondsDifference / MILISECONDS_IN_DAY) + " $day"
        );
      default:
        var dateString = new Date(milisecondsParameter).toLocaleDateString(
          "es-ES"
        );
        return dateString;
    }
  };

  return {
    convertDate,
    timeAgoFromNow,
  };
};
