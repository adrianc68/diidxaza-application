import { useState } from "react";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlAPI} from "../helpers/helpHttp";
import {BiError, BiBadgeCheck} from 'react-icons/bi';
import ImageInformationAlt from '../assets/images/ide-02.svg';

export const useForum = (validateForm,validateFormComment,initialForm,setDiscussions) => {
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
    const [icon, setIcon] = useState(<BiError/>);
    const [commentLenght,setCommentLenght] = useState(0);
    const [numberComments,setNumberComments] = useState(0);

    const [responseModalForum, setResponseModalForum] = useState("");
    const [modalForum, setModalForum] = useState(false);
    const [modalToken, setModalToken] = useState(false);
    const [imagesComments, setImagesComments] = useState([])

    const handleChange = (e) =>{
        const {value} = e.target;
        setTitle(value);
    }

    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(title));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(title));
        if(Object.keys(errors).length === 0){
            setLoadingDiscussion(false);
            setFoundDiscussion(false);
            helpHttp().get(UrlAPI+"discussions/title/"+title,{
                headers: {
                    Accept: "application/json",
                    'Authorization': sessionStorage.getItem("token")
                }
            }).then((response) => {
                if(!response.status){
                    setLoading(false);
                    setDiscussions(response);
                }else {
                    setDiscussions([]);
                    if(response.status === 404){
                        setLoading(true);
                    }else {
                        if(response.status === 401){
                            setLoading(false);
                            setResponseModalForum(t("ErrorToken"));
                            setModalForum(true);
                        }else {
                            if(response.status === 419){
                                setLoading(false);
                                setModalForum(false);
                                setModalToken(true);
                            }else {
                                setLoading(false);
                            }
                        }
                    }
                }
            });
        }
        else{
            return;
        }
    }

    const handleClickNews = (e) =>{
        e.preventDefault();
        setLoadingDiscussion(false);
        setFoundDiscussion(false);
        helpHttp().get(UrlAPI+"discussions/filters/news",{
            headers: {
                Accept: "application/json",
                'Authorization': sessionStorage.getItem("token")
            }
        }).then((response) => {
            if(!response.status){
                setLoading(false);
                setDiscussions(response);
            }else {
                setDiscussions([]);
                if(response.status === 404){
                    setLoading(true);
                } else {
                    if(response.status === 401){
                        setLoading(false);
                        setResponseModalForum(t("ErrorToken"));
                        setModalForum(true);
                    }else {
                        if(response.status === 419){
                            setLoading(false);
                            setModalForum(false);
                            setModalToken(true);
                        }else {
                            setLoading(false);
                        }
                    }
                }
            }
        });
    }

    const handleClickPopulars = (e) =>{
        e.preventDefault();
        setLoadingDiscussion(false);
        setFoundDiscussion(false);
        helpHttp().get(UrlAPI+"discussions/filters/populars",{
            headers: {
                Accept: "application/json",
                'Authorization': sessionStorage.getItem("token")
            }
        }).then((response) => {
            if(!response.status){
                setLoading(false);
                setDiscussions(response);
            }else {
                setDiscussions([]);
                if(response.status === 404){
                    setLoading(true);
                }else {
                    if(response.status === 401){
                        setLoading(false);
                        setResponseModalForum(t("ErrorToken"));
                        setModalForum(true);
                    }else{
                        if(response.status === 419){
                            setLoading(false);
                            setModalForum(false);
                            setModalToken(true);
                        }else {
                            setLoading(false);
                        }
                    }
                }
            }
        });
    }

    const handleClickFollowing = (e) =>{
        e.preventDefault();
        setLoadingDiscussion(false);
        setFoundDiscussion(false);
        helpHttp().get(UrlAPI+"discussions/tracing/"+sessionStorage.getItem("id"),{
            headers: {
                Accept: "application/json",
                'Authorization': sessionStorage.getItem("token")
            }
        }).then((response) => {
            if(!response.status){
                setLoading(false);
                setDiscussions(response);
            }else {
                setDiscussions([]);
                if(response.status === 404){
                    setLoading(true);
                }else{
                    if(response.status === 401){
                        setLoading(false);
                        setResponseModalForum(t("ErrorToken"));
                        setModalForum(true);
                    }else {
                        if(response.status === 419){
                            setLoading(false);
                            setModalForum(false);
                            setModalToken(true);
                        } else{
                            setLoading(false);
                        }
                    }
                }
            }
        });
    }

    const handleClickDiscussion = async(e, id) =>{
        e.preventDefault();
        await setImagesComments([]);
        await setLoadingDiscussion(false);
        await setFoundDiscussion(false);
        helpHttp().get(UrlAPI+"discussions/"+id,{
            headers: {
                Accept: "application/json",
                'Authorization': sessionStorage.getItem("token")
            }
        }).then((responseDiscussion) => {
            if(responseDiscussion._id){
                setDiscussion(responseDiscussion);
                setFormComment({
                    ...formComment,
                    comment:""
                });
                setNumberComments(responseDiscussion.numberComments);
                setCommentLenght(0);
                setErrorsComment({});
                setLoadingComment(false);
                setLoadingDiscussion(false);
                setFoundDiscussion(true);
                if(responseDiscussion.idAccount[0].URL!= undefined){
                    const url =  {
                        URL: responseDiscussion.idAccount[0].URL
                    }
                    fetch(UrlAPI+"resources",{
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': sessionStorage.getItem("token")
                        },
                        body: JSON.stringify(url)
                    }).then((responseResource) => {
                        if (responseResource.ok) {
                            responseResource.blob().then(responseBlob => {
                                var objectURL = URL.createObjectURL(responseBlob);
                                setImageAccount(objectURL)
                            });
                        } else {
                            setImageAccount(ImageInformationAlt)
                        }
                    });
                } else{
                    setImageAccount(ImageInformationAlt)
                }

                helpHttp().get(UrlAPI+"comments/"+id,{
                    headers: {
                        Accept: "application/json",
                        'Authorization': sessionStorage.getItem("token")
                    }
                }).then(async (responseComments) => {
                    if(!responseComments.status){
                        setComments(responseComments);
                        await responseComments.map(imageComment => {
                            if(imageComment.idAccount[0].URL!= undefined){
                                fetch(UrlAPI+"resources",{
                                    method: 'PATCH',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Authorization': sessionStorage.getItem("token")
                                    },
                                    body: JSON.stringify({URL:imageComment.idAccount[0].URL})
                                }).then((response) => {
                                    if (response.ok) {
                                        response.blob().then((responseBlob) => {
                                            var objectURL = URL.createObjectURL(responseBlob);
                                            setImagesComments(imagesComments => [...imagesComments, objectURL]);
                                        });
                                    }
                                    else{
                                        setImagesComments(imagesComments => [...imagesComments, ImageInformationAlt]);
                                    }
                                });
                            }else{
                                setImagesComments(imagesComments => [...imagesComments, ImageInformationAlt]);
                            }
                        })
                    }
                    else{
                        if(responseComments.status === 419){
                            setLoadingDiscussion(false);
                            setFoundDiscussion(false);
                            setModalForum(false);
                            setModalToken(true);
                        }else{
                            setComments([]);
                        }
                        setImagesComments([])
                    }
                });
            }else {
                setNumberComments(0);
                if(responseDiscussion.status === 401){
                    setLoadingDiscussion(false);
                    setFoundDiscussion(false);
                    setResponseModalForum(t("ErrorToken"));
                    setModalForum(true);
                }
                else{
                    if(responseDiscussion.status === 419){
                        setLoadingDiscussion(false);
                        setFoundDiscussion(false);
                        setModalForum(false);
                        setModalToken(true);
                    }else{
                        if(responseDiscussion.status === 404){
                            setResponse(t("NotFoundDiscussion"));
                        }else{
                            setResponse(t("ErrorMessage"));
                        }
                        setLoadingDiscussion(true);
                        setFoundDiscussion(false);
                        ///FALTA PONER EL CONTENERDOR CON LA RESPUESTA
                    }
                }
            }
        });
    }

    const handleSubmitComment = (e) =>{
        e.preventDefault();
        setErrorsComment(validateFormComment(formComment.comment));
        if(Object.keys(errorsComment).length === 0){
            helpHttp().post(UrlAPI+"comments",{
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token")
                },
                body: formComment
            }).then((response) => {
                if(response._id){
                    setIcon(<BiBadgeCheck/>);
                    setClaseName("successfulMessage");
                    setResponseComment(t("AddCommentSuccessful"));
                    setLoadingComment(true);
                    setFormComment({
                        ...formComment,
                        comment:""
                    });
                    setTimeout(() => setLoadingComment(false), 1600);
                    setNumberComments(numberComments+1);
                    helpHttp().get(UrlAPI+"comments/"+response.idDiscussion,{
                        headers: {
                            Accept: "application/json",
                            'Authorization': sessionStorage.getItem("token")
                        }
                    }).then((response) => {
                        if(!response.status){
                            setComments(response);
                        }else{
                            if(response.status === 419){
                                setModalForum(false);
                                setModalToken(true);
                            }
                        }
                    });
                }
                else{
                    if(response.status === 401){
                        setLoadingComment(false);
                        setResponseModalForum(t("ErrorToken"));
                        setModalForum(true);
                    }else {
                        if(response.status === 419){
                            setLoadingComment(false);
                            setModalForum(false);
                            setModalToken(true);
                        }else{
                            if(response.status === 400){
                                setResponseComment(t("AddComentNotFound"));
                            }else{   
                                setResponseComment(t("ErrorMessage"));   
                            } 
                            setIcon(<BiError/>);
                            setClaseName("errorMessage");
                            setLoadingComment(true);
                        } 
                    }
                }
            });
        }
        else{
            return;
        }
    }

    const handleClickComment = (e) =>{
        e.preventDefault();
        setFormComment({
            ...formComment,
            comment:""
        });
        setErrorsComment({});
    }

    const handleClickDeleteComment = (e, id, idDiscussion, setStatusModalDelete) =>{
        e.preventDefault();
        setStatusModalDelete(false);
        helpHttp().del(UrlAPI+"comments",{
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token")
            },
            body: {
                _id:id,
                idDiscussion:idDiscussion
            }
        }).then((response) => {
            if(response.message){
                setNumberComments(numberComments-1);
                helpHttp().get(UrlAPI+"comments/"+discussion._id,{
                    headers: {
                        Accept: "application/json",
                        'Authorization': sessionStorage.getItem("token")
                    }
                }).then((response) => {
                    if(response.status === 419){
                        setModalForum(false);
                        setModalToken(true);
                    }else {
                        if(!response.status){
                            setComments(response);
                        }
                        setResponseModalForum(t("DeleteCommentSuccessful"));
                        setModalForum(true);
                    }
                });
            }
            else{
                if(response.status === 419){
                    setModalForum(false);
                    setModalToken(true);
                }else{
                    if(response.status === 401){
                        setResponseModalForum(t("ErrorToken"));
                    }
                    else{
                        setResponseModalForum(t("ErrorMessage"));
                    }
                    setModalForum(true);
                }
            }
        });
    }

    const handleChangeComment = (e) =>{
        const {value} = e.target;
        setCommentLenght(value.trim().length);
        setFormComment({
            ...formComment,
            comment:value,
            idDiscussion:discussion._id
        });
    }

    const handleBlurComment = (e) =>{
        handleChangeComment(e);
        setErrorsComment(validateFormComment(formComment.comment));
    }

    const handleClickFollow = (e) =>{
        e.preventDefault();
        helpHttp().patch(UrlAPI+"discussions",{
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token")
            },
            body: {
                _id:discussion._id,
                idAccount:sessionStorage.getItem("id")
            }
        }).then((response) => {
            if(response.message){
                setResponseModalForum(t("FollowSuccessful"));
                setModalToken(false);
                setModalForum(true);
            }else {
                if(response.status === 419){
                    setModalForum(false);
                    setModalToken(true);
                }else{
                    if(response.status === 401){
                        setResponseModalForum(t("ErrorToken"));
                    }
                    else{
                        if(response.status === 400){
                            setResponseModalForum(t("FollowNotSuccessful"));
                        }
                        else{
                          setResponseModalForum(t("ErrorMessage"));
                        }
                    }
                    setModalToken(false);
                    setModalForum(true);
                }
            }
        });
    }

    return {
        title,errors,loading,handleChange,handleSubmit,handleClickNews,handleClickPopulars,handleClickFollowing,handleBlur,
        discussion,handleClickDiscussion,response,loadingDiscussion,foundDiscussion,comments,
        imageAccount,handleChangeComment,handleSubmitComment,handleBlurComment,formComment,errorsComment,handleClickComment,
        loadingComment,icon,className,responseComment,commentLenght,numberComments,handleClickFollow,
        responseModalForum, modalForum,setModalForum,handleClickDeleteComment,modalToken,setModalToken,imagesComments
    }
};

export const useDiscussionForm = (initialForm,validateForm) => {
    const { t } = useTranslation();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [className, setClaseName] = useState("errorDelete");
    const [icon, setIcon] = useState(<BiError/>);

    const [classInfo, setClaseInfo] = useState("li-not-select");
    const [classDoubt, setClaseDoubt] = useState("li-not-select");
    const [classRule, setClaseRule] = useState("li-not-select");

    const [modalNotToken, setModalNotToken] = useState(false);
    const [modalToken, setModalToken] = useState(false);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value,
        });
    }

    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleClickTheme = (e,theme) =>{
        e.preventDefault();
        if(theme === "duda"){
            setClaseDoubt("li-select");
            setClaseInfo("li-not-select");
            setClaseRule("li-not-select");
        } else{
            if(theme === "info"){
                setClaseDoubt("li-not-select");
                setClaseInfo("li-select");
                setClaseRule("li-not-select");
            } else{
                setClaseDoubt("li-not-select");
                setClaseInfo("li-not-select");
                setClaseRule("li-select");
            }
        }
        setForm({
            ...form,
            theme:theme,
        });
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(form));
        if(Object.keys(errors).length === 0){
            let regexTheme = /(?:info|duda|regla)$/;
            if(regexTheme.test(form.theme)){
                helpHttp().post(UrlAPI+"discussions",{
                    headers: {
                        Accept: "application/json",
                        'Content-Type': 'application/json',
                        'Authorization': sessionStorage.getItem("token")
                    },
                    body: form
                }).then((response) => {
                    if(response._id){
                        setIcon(<BiBadgeCheck/>);
                        setClaseName("successfulMessage");
                        setResponse(t("AddDiscussionSuccessful"));
                        setLoading(true);
                    }else{
                        if(response.status === 419){
                            setLoading(false);
                            setModalNotToken(false)
                            setModalToken(true);
                        }else{
                            if(response.status === 401){
                                setLoading(false);
                                setModalToken(false);
                                setModalNotToken(true);
                            }else{
                                setIcon(<BiError/>);
                                setClaseName("errorMessage");
                                if(response.status === 400){
                                    setResponse(t("SignUpVerificationSendNot"));
                                }else{
                                    setResponse(t("ErrorMessage")); 
                                }
                                setLoading(true);
                            }
                        }
                    }         
                });
            }
            else{
                setIcon(<BiError/>);
                setClaseName("errorMessage");
                setResponse(t("ErrorTheme"));
                setLoading(true);
            }
        }
        else{
            return;
        }
    }
    return {
        form,errors,loading,response,className,handleChange,handleBlur,handleSubmit,icon,handleClickTheme,classInfo,classDoubt,classRule,modalNotToken,modalToken,setModalNotToken
    }
}