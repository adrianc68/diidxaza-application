import i18n from "../translations/i18n";
import { RESPONSE_STATUS } from "./Response";

const checkStateResponseHTTP = (status) => {
    let errorMessage;
    switch (status) {
        case RESPONSE_STATUS.NOT_FOUND:
            errorMessage = i18n.t("ServerError404");
            break;
        case RESPONSE_STATUS.BAD_REQUEST:
            errorMessage = i18n.t("ServerError400");
            break;
        case RESPONSE_STATUS.INSUFFICIENT_SPACE:
            errorMessage = i18n.t("ServerError419");
            break;
        case RESPONSE_STATUS.UNAUTHORIZED:
            errorMessage = i18n.t("ServerError401");
            break;
        case RESPONSE_STATUS.ERROR_INTERNAL_SERVER:
            errorMessage = i18n.t("ServerError500");
            break;
        default:
            errorMessage = i18n.t("ServerDefaultError").replace("$", status);
    }
    return errorMessage;
};

export function getMessageResponseStatus(response) {
    let errorMessage;
    if (response.message !== "Failed to fetch") {
        errorMessage = checkStateResponseHTTP(response.status);
    } else {
        errorMessage = i18n.t("ServerConnectionRefused");
    }
    return errorMessage;
}
