import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlAPI } from "../helpers/helpHttp";
import { BiError, BiBadgeCheck } from "react-icons/bi";
import ImageInformationAlt from "../assets/images/ide-02.svg";
import { NUMBER } from "../helpers/Number";
import { RESPONSE_STATUS } from "../helpers/Response";
import { ModalContext } from "./ModalContext";
import AlertMessage from "../components/alert/AlertMessage";

export const useForum = (validateForm, validateFormComment, initialForm, setDiscussions) => {
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const [discussion, setDiscussion] = useState(null);
    const [response, setResponse] = useState("");
    const [loadingDiscussion, setLoadingDiscussion] = useState(false);
    const [foundDiscussion, setFoundDiscussion] = useState(false);

    const [comments, setComments] = useState({});

    const { t } = useTranslation();

    const [imageAccount, setImageAccount] = useState(ImageInformationAlt);
    const [formComment, setFormComment] = useState(initialForm);
    const [errorsComment, setErrorsComment] = useState({});
    const [loadingComment, setLoadingComment] = useState(false);
    const [responseComment, setResponseComment] = useState(null);
    const [className, setClaseName] = useState("errorDelete");
    const [icon, setIcon] = useState(<BiError />);
    const [commentLenght, setCommentLenght] = useState(0);
    const [numberComments, setNumberComments] = useState(0);
    const [imagesComments, setImagesComments] = useState([]);

    const { setStatusModal, setComponent } = useContext(ModalContext);

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, handleModalFunction, titleA) => {
        const initialValue = {
            sizeHeight: sizeHeightA,
            sizeWidth: sizeWidthA,
            title: titleA,
            object: ComponentTagA,
            handleModal: handleModalFunction,
        };
        setComponent(initialValue);
        setStatusModal(true);
    };

    const handleModalForum = (content, handleModalFunction, title) => {
        handleModal(<AlertMessage content={content} handleModal={handleModalFunction}></AlertMessage>, "180px", "450px", handleModalFunction, title);
    };

    const handleChange = (e) => {
        const { value } = e.target;
        setTitle(value);
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(title));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(title));
        if (Object.keys(errors).length === NUMBER.ZERO) {
            setLoadingDiscussion(false);
            setFoundDiscussion(false);
            helpHttp()
                .get(UrlAPI + "discussions/title/" + title, {
                    headers: {
                        Accept: "application/json",
                        Authorization: sessionStorage.getItem("token"),
                    },
                })
                .then((response) => {
                    if (response.length > NUMBER.ZERO) {
                        setLoading(false);
                        setDiscussions(response);
                    } else {
                        setDiscussions([]);
                        if (response.status === RESPONSE_STATUS.NOT_FOUND) {
                            setLoading(true);
                        } else {
                            setLoading(false);
                            if (response.status === RESPONSE_STATUS.UNAUTHORIZED) {
                                handleModalForum(t("ErrorToken"), () => {
                                    setStatusModal(false);
                                });
                            } else {
                                if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                                    handleModalForum(t("RefreshToken"), () => {
                                        window.location.href = "login";
                                    });
                                }
                            }
                        }
                    }
                });
        } else {
            return;
        }
    };

    const handleClickNews = (e) => {
        e.preventDefault();
        setLoadingDiscussion(false);
        setFoundDiscussion(false);
        setErrors({});
        helpHttp()
            .get(UrlAPI + "discussions/filters/news", {
                headers: {
                    Accept: "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
            })
            .then((response) => {
                if (response.length > NUMBER.ZERO) {
                    setLoading(false);
                    setDiscussions(response);
                } else {
                    setDiscussions([]);
                    if (response.status === RESPONSE_STATUS.NOT_FOUND) {
                        setLoading(true);
                    } else {
                        setLoading(false);
                        if (response.status === RESPONSE_STATUS.UNAUTHORIZED) {
                            handleModalForum(t("ErrorToken"), () => {
                                setStatusModal(false);
                            });
                        } else {
                            if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                                handleModalForum(t("RefreshToken"), () => {
                                    window.location.href = "login";
                                });
                            }
                        }
                    }
                }
            });
    };

    const setActiveClassFilterButtons = () => {
        let buttons = document.querySelectorAll(".forum-button-filter-button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].children[0].addEventListener("click", (e) => {
                e.preventDefault();
                for (let j = 0; j < buttons.length; j++) {
                    buttons[j].children[0].classList.remove("active");
                }
                buttons[i].children[0].classList.add("active");
            });
        }
    };

    const removeActiveClassFilterButton = () => {
        let buttons = document.querySelectorAll(".forum-button-filter-button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].children[0].classList.remove("active");
        }
    };

    const handleClickPopulars = (e) => {
        e.preventDefault();
        setLoadingDiscussion(false);
        setFoundDiscussion(false);
        setErrors({});
        helpHttp()
            .get(UrlAPI + "discussions/filters/populars", {
                headers: {
                    Accept: "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
            })
            .then((response) => {
                if (response.length > NUMBER.ZERO) {
                    setLoading(false);
                    setDiscussions(response);
                } else {
                    setDiscussions([]);
                    if (response.status === RESPONSE_STATUS.NOT_FOUND) {
                        setLoading(true);
                    } else {
                        setLoading(false);
                        if (response.status === RESPONSE_STATUS.UNAUTHORIZED) {
                            handleModalForum(t("ErrorToken"), () => {
                                setStatusModal(false);
                            });
                        } else {
                            if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                                handleModalForum(t("RefreshToken"), () => {
                                    window.location.href = "login";
                                });
                            }
                        }
                    }
                }
            });
    };

    const handleClickFollowing = (e) => {
        e.preventDefault();
        setLoadingDiscussion(false);
        setFoundDiscussion(false);
        setErrors({});
        helpHttp()
            .get(UrlAPI + "discussions/tracing/" + sessionStorage.getItem("id"), {
                headers: {
                    Accept: "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
            })
            .then((response) => {
                if (response.length > NUMBER.ZERO) {
                    setLoading(false);
                    setDiscussions(response);
                } else {
                    setDiscussions([]);
                    if (response.status === RESPONSE_STATUS.NOT_FOUND) {
                        setLoading(true);
                    } else {
                        setLoading(false);
                        if (response.status === RESPONSE_STATUS.UNAUTHORIZED) {
                            handleModalForum(t("ErrorToken"), () => {
                                setStatusModal(false);
                            });
                        } else {
                            if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                                handleModalForum(t("RefreshToken"), () => {
                                    window.location.href = "login";
                                });
                            }
                        }
                    }
                }
            });
    };

    const handleClickDiscussion = async (e, id) => {
        e.preventDefault();
        await setImagesComments([]);
        await setLoadingDiscussion(false);
        await setFoundDiscussion(false);
        setErrors({});
        helpHttp()
            .get(UrlAPI + "discussions/" + id, {
                headers: {
                    Accept: "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
            })
            .then((responseDiscussion) => {
                if (responseDiscussion._id) {
                    setDiscussion(responseDiscussion);
                    setFormComment({
                        ...formComment,
                        comment: "",
                    });
                    setNumberComments(responseDiscussion.numberComments);
                    setCommentLenght(0);
                    setErrorsComment({});
                    setLoadingComment(false);
                    setLoadingDiscussion(false);
                    setFoundDiscussion(true);
                    if (responseDiscussion.idAccount[0].URL !== undefined) {
                        const url = {
                            URL: responseDiscussion.idAccount[0].URL,
                        };
                        fetch(UrlAPI + "resources", {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: sessionStorage.getItem("token"),
                            },
                            body: JSON.stringify(url),
                        }).then((responseResource) => {
                            if (responseResource.ok) {
                                responseResource.blob().then((responseBlob) => {
                                    let objectURL = URL.createObjectURL(responseBlob);
                                    setImageAccount(objectURL);
                                });
                            } else {
                                setImageAccount(ImageInformationAlt);
                            }
                        });
                    } else {
                        setImageAccount(ImageInformationAlt);
                    }

                    helpHttp()
                        .get(UrlAPI + "comments/" + id, {
                            headers: {
                                Accept: "application/json",
                                Authorization: sessionStorage.getItem("token"),
                            },
                        })
                        .then(async (responseComments) => {
                            if (responseComments.length > NUMBER.ZERO) {
                                await responseComments.map(async (imageComment) => {
                                    if (imageComment.idAccount[0].URL !== undefined) {
                                        fetch(UrlAPI + "resources", {
                                            method: "PATCH",
                                            headers: {
                                                "Content-Type": "application/json",
                                                Authorization: sessionStorage.getItem("token"),
                                            },
                                            body: JSON.stringify({
                                                URL: imageComment.idAccount[0].URL,
                                            }),
                                        }).then((response) => {
                                            if (response.ok) {
                                                response.blob().then((responseBlob) => {
                                                    let objectURL = URL.createObjectURL(responseBlob);
                                                    setImagesComments((imagesComments) => [...imagesComments, { id: imageComment._id, imageComment: objectURL }]);
                                                });
                                            } else {
                                                setImagesComments((imagesComments) => [
                                                    ...imagesComments,
                                                    {
                                                        id: imageComment._id,
                                                        imageComment: ImageInformationAlt,
                                                    },
                                                ]);
                                            }
                                        });
                                    } else {
                                        setImagesComments((imagesComments) => [
                                            ...imagesComments,
                                            {
                                                id: imageComment._id,
                                                imageComment: ImageInformationAlt,
                                            },
                                        ]);
                                    }
                                });
                                setComments(responseComments);
                            } else {
                                if (responseComments.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                                    setLoadingDiscussion(false);
                                    setFoundDiscussion(false);
                                    handleModalForum(t("RefreshToken"), () => {
                                        window.location.href = "login";
                                    });
                                } else {
                                    setComments([]);
                                }
                                setImagesComments([]);
                            }
                        });
                } else {
                    setNumberComments(0);
                    if (responseDiscussion.status === RESPONSE_STATUS.UNAUTHORIZED) {
                        setLoadingDiscussion(false);
                        setFoundDiscussion(false);
                        handleModalForum(t("ErrorToken"), () => {
                            setStatusModal(false);
                        });
                    } else {
                        if (responseDiscussion.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                            setLoadingDiscussion(false);
                            setFoundDiscussion(false);
                            handleModalForum(t("RefreshToken"), () => {
                                window.location.href = "login";
                            });
                        } else {
                            if (responseDiscussion.status === RESPONSE_STATUS.NOT_FOUND) {
                                setResponse(t("NotFoundDiscussion"));
                            } else {
                                setResponse(t("ErrorMessage"));
                            }
                            setLoadingDiscussion(true);
                            setFoundDiscussion(false);
                        }
                    }
                }
            });
    };

    const handleSubmitComment = (e) => {
        e.preventDefault();
        setErrors({});
        setErrorsComment(validateFormComment(formComment.comment));
        if (Object.keys(errorsComment).length === NUMBER.ZERO) {
            helpHttp()
                .post(UrlAPI + "comments", {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: sessionStorage.getItem("token"),
                    },
                    body: formComment,
                })
                .then((response) => {
                    if (response._id) {
                        setIcon(<BiBadgeCheck />);
                        setClaseName("successfulMessage");
                        setResponseComment(t("AddCommentSuccessful"));
                        setLoadingComment(true);
                        setFormComment({
                            ...formComment,
                            comment: "",
                        });
                        setTimeout(() => setLoadingComment(false), 1600);
                        setNumberComments(numberComments + 1);
                        const newComment = {
                            _id: response._id,
                            comment: response.comment,
                            dateCreation: response.dateCreation,
                            idAccount: [
                                {
                                    _id: sessionStorage.getItem("id"),
                                    lastname: sessionStorage.getItem("lastname"),
                                    name: sessionStorage.getItem("name"),
                                    URL: sessionStorage.getItem("URL"),
                                },
                            ],
                        };
                        if (sessionStorage.getItem("URL") !== undefined) {
                            fetch(UrlAPI + "resources", {
                                method: "PATCH",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: sessionStorage.getItem("token"),
                                },
                                body: JSON.stringify({ URL: sessionStorage.getItem("URL") }),
                            }).then((response) => {
                                if (response.ok) {
                                    response.blob().then((responseBlob) => {
                                        let objectURL = URL.createObjectURL(responseBlob);
                                        setImagesComments((imagesComments) => [...imagesComments, { id: newComment._id, imageComment: objectURL }]);
                                    });
                                } else {
                                    setImagesComments((imagesComments) => [...imagesComments, { id: newComment._id, imageComment: ImageInformationAlt }]);
                                }
                            });
                        } else {
                            setImagesComments((imagesComments) => [...imagesComments, { id: newComment._id, imageComment: ImageInformationAlt }]);
                        }
                        setComments((comments) => [...comments, newComment]);
                    } else {
                        if (response.status === RESPONSE_STATUS.UNAUTHORIZED) {
                            setLoadingComment(false);
                            handleModalForum(t("ErrorToken"), () => {
                                setStatusModal(false);
                            });
                        } else {
                            if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                                setLoadingComment(false);
                                handleModalForum(t("RefreshToken"), () => {
                                    window.location.href = "login";
                                });
                            } else {
                                if (response.status === RESPONSE_STATUS.BAD_REQUEST) {
                                    setResponseComment(t("AddComentNotFound"));
                                } else {
                                    setResponseComment(t("ErrorMessage"));
                                }
                                setIcon(<BiError />);
                                setClaseName("errorMessage");
                                setLoadingComment(true);
                            }
                        }
                    }
                });
        } else {
            return;
        }
    };

    const handleClickComment = (e) => {
        e.preventDefault();
        setFormComment({
            ...formComment,
            comment: "",
        });
        setCommentLenght(0);
        setErrorsComment({});
    };

    const handleClickDeleteComment = (e, id, idDiscussion, setStatusModalDelete) => {
        e.preventDefault();
        setStatusModalDelete(false);
        helpHttp()
            .del(UrlAPI + "comments", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
                body: {
                    _id: id,
                    idDiscussion,
                },
            })
            .then(async (response) => {
                if (response.messageHappened) {
                    setNumberComments(numberComments - 1);
                    setComments(comments.filter((item) => item._id !== id));
                    setImagesComments(imagesComments.filter((item) => item.id !== id));
                } else {
                    if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                        handleModalForum(t("RefreshToken"), () => {
                            window.location.href = "login";
                        });
                    } else {
                        if (response.status === RESPONSE_STATUS.UNAUTHORIZED) {
                            handleModalForum(t("ErrorToken"), () => {
                                setStatusModal(false);
                            });
                        } else {
                            handleModalForum(t("ErrorMessage"), () => {
                                setStatusModal(false);
                            });
                        }
                    }
                }
            });
    };

    const handleChangeComment = (e) => {
        const { value } = e.target;
        setCommentLenght(value.trim().length);
        setFormComment({
            ...formComment,
            comment: value,
            idDiscussion: discussion._id,
        });
    };

    const handleBlurComment = (e) => {
        handleChangeComment(e);
        setErrorsComment(validateFormComment(formComment.comment));
    };

    const handleClickFollow = (e) => {
        e.preventDefault();
        helpHttp()
            .patch(UrlAPI + "discussions", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: sessionStorage.getItem("token"),
                },
                body: {
                    _id: discussion._id,
                    idAccount: sessionStorage.getItem("id"),
                },
            })
            .then((response) => {
                if (response.messageHappened) {
                    handleModalForum(t("FollowSuccessful"), () => {
                        setStatusModal(false);
                    });
                } else {
                    if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                        handleModalForum(t("RefreshToken"), () => {
                            window.location.href = "login";
                        });
                    } else {
                        if (response.status === RESPONSE_STATUS.UNAUTHORIZED) {
                            handleModalForum(t("ErrorToken"), () => {
                                setStatusModal(false);
                            });
                        } else {
                            if (response.status === RESPONSE_STATUS.BAD_REQUEST) {
                                handleModalForum(t("FollowNotSuccessful"), () => {
                                    setStatusModal(false);
                                });
                            } else {
                                handleModalForum(t("ErrorMessage"), () => {
                                    setStatusModal(false);
                                });
                            }
                        }
                    }
                }
            });
    };

    return {
        title,
        errors,
        loading,
        handleChange,
        handleSubmit,
        handleClickNews,
        handleClickPopulars,
        handleClickFollowing,
        handleBlur,
        discussion,
        handleClickDiscussion,
        response,
        loadingDiscussion,
        foundDiscussion,
        comments,
        imageAccount,
        handleChangeComment,
        handleSubmitComment,
        handleBlurComment,
        formComment,
        errorsComment,
        handleClickComment,
        loadingComment,
        icon,
        className,
        responseComment,
        commentLenght,
        numberComments,
        handleClickFollow,
        handleClickDeleteComment,
        imagesComments,
        setActiveClassFilterButtons,
        removeActiveClassFilterButton,
    };
};

export const useDiscussionForm = (initialForm, validateForm) => {
    const { t } = useTranslation();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [className, setClaseName] = useState("errorDelete");
    const [icon, setIcon] = useState(<BiError />);

    const [classInfo, setClaseInfo] = useState("li-not-select");
    const [classDoubt, setClaseDoubt] = useState("li-not-select");
    const [classRule, setClaseRule] = useState("li-not-select");

    const { setStatusModal, setComponent } = useContext(ModalContext);

    const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, handleModalFunction, titleA) => {
        const initialValue = {
            sizeHeight: sizeHeightA,
            sizeWidth: sizeWidthA,
            title: titleA,
            object: ComponentTagA,
            handleModal: handleModalFunction,
        };
        setComponent(initialValue);
        setStatusModal(true);
    };

    const handleModalForum = (content, handleModalFunction, title) => {
        handleModal(<AlertMessage content={content} handleModal={handleModalFunction}></AlertMessage>, "180px", "450px", handleModalFunction, title);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form));
    };

    const handleClickTheme = (e, theme) => {
        e.preventDefault();
        if (theme === "duda") {
            setClaseDoubt("li-select");
            setClaseInfo("li-not-select");
            setClaseRule("li-not-select");
        } else {
            if (theme === "info") {
                setClaseDoubt("li-not-select");
                setClaseInfo("li-select");
                setClaseRule("li-not-select");
            } else {
                setClaseDoubt("li-not-select");
                setClaseInfo("li-not-select");
                setClaseRule("li-select");
            }
        }
        setForm({
            ...form,
            theme: theme,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));
        if (Object.keys(errors).length === NUMBER.ZERO) {
            let regexTheme = /(?:info|duda|regla)$/;
            if (regexTheme.test(form.theme)) {
                setForm({
                    ...form,
                    idAccount: sessionStorage.getItem("id"),
                });
                helpHttp()
                    .post(UrlAPI + "discussions", {
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: sessionStorage.getItem("token"),
                        },
                        body: form,
                    })
                    .then((response) => {
                        if (response._id) {
                            setIcon(<BiBadgeCheck />);
                            setClaseName("successfulMessage");
                            setResponse(t("AddDiscussionSuccessful"));
                            setLoading(true);
                        } else {
                            if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
                                setLoading(false);
                                handleModalForum(t("RefreshToken"), () => {
                                    window.location.href = "login";
                                });
                            } else {
                                if (response.status === RESPONSE_STATUS.UNAUTHORIZED) {
                                    setLoading(false);
                                    handleModalForum(t("ErrorToken"), () => {
                                        setStatusModal(false);
                                    });
                                } else {
                                    setIcon(<BiError />);
                                    setClaseName("errorMessage");
                                    if (response.status === RESPONSE_STATUS.BAD_REQUEST) {
                                        setResponse(t("SignUpVerificationSendNot"));
                                    } else {
                                        if (response.status === RESPONSE_STATUS.CONFLICT) {
                                            setResponse(t("ExistDiscussion"));
                                        } else {
                                            setResponse(t("ErrorMessage"));
                                        }
                                    }
                                    setLoading(true);
                                }
                            }
                        }
                    });
            } else {
                setIcon(<BiError />);
                setClaseName("errorMessage");
                setResponse(t("ErrorTheme"));
                setLoading(true);
            }
        } else {
            return;
        }
    };
    return {
        form,
        errors,
        loading,
        response,
        className,
        handleChange,
        handleBlur,
        handleSubmit,
        icon,
        handleClickTheme,
        classInfo,
        classDoubt,
        classRule,
    };
};
