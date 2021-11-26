
export const useConvertionData = () => {
    const convertDate = (date) => {
        if (date != null) {
            var dateString = date.split(['-']);
            var year = dateString[0];
            var month = dateString[1];
            var day = dateString[2];
            var formatDate = new Date(year, month - 1, day);
            var options = { year: "numeric", month: "long", day: "numeric" }
            return (formatDate.toLocaleDateString("es-ES", options));
        }
    }

    return {
        convertDate
    }
}
