import { useState } from "react";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlAPI} from "../helpers/helpHttp";
import {BiError, BiBadgeCheck} from 'react-icons/bi';
import ImageInformationAlt from '../assets/images/ide-02.svg';

export const useForum = (validateForm,validateFormComment,initialForm) => {
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [discussions, setDiscussions] = useState({});

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

    //const [responseModalForum, ]

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
                    setDiscussions({});
                    if(response.status === 404){
                        setLoading(true);
                    }else{
                        setLoading(false);
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
                setDiscussions({});
                if(response.status === 404){
                    setLoading(true);
                } else {
                    setLoading(false);
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
                setDiscussions({});
                if(response.status === 404){
                    setLoading(true);
                } else {
                    setLoading(false);
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
                setDiscussions({});
                if(response.status === 404){
                    setLoading(true);
                }else{
                    setLoading(false);
                }
            }
        });
    }

    const handleClickDiscussion = (e, id) =>{
        e.preventDefault();
        helpHttp().get(UrlAPI+"discussions/"+id,{
            headers: {
                Accept: "application/json",
                'Authorization': sessionStorage.getItem("token")
            }
        }).then((response) => {
            if(response._id){
                setDiscussion(response);
                setFormComment({
                    ...formComment,
                    comment:""
                });
                setNumberComments(response.numberComments);
                setCommentLenght(0);
                setErrorsComment({});
                setLoadingComment(false);
                setLoadingDiscussion(false);
                setFoundDiscussion(true);
                if(response.idAccount[0].URL!= undefined){
                    const url =  {
                        URL: response.idAccount[0].URL
                    }
                    fetch(UrlAPI+"resources",{
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': sessionStorage.getItem("token")
                        },
                        body: JSON.stringify(url)
                    }).then((response) => {
                        if (response.ok) {
                            response.blob().then(responseBlob => {
                                var objectURL = URL.createObjectURL(responseBlob);
                                setImageAccount(objectURL)
                            });
                        } else {
                            setImageAccount(ImageInformationAlt)
                        }
                    })
                } else{
                    setImageAccount(ImageInformationAlt)
                }
                helpHttp().get(UrlAPI+"comments/"+id,{
                    headers: {
                        Accept: "application/json",
                        'Authorization': sessionStorage.getItem("token")
                    }
                }).then((response) => {
                    if(!response.status){
                        setComments(response);
                    }
                    else{
                        setComments({});
                    }
                });
            }else {
                setNumberComments(0);
                if(response.status === 404){
                    setResponse(t("NotFoundDiscussion"));
                }else{
                    setResponse(t("ErrorMessage"));
                }
                setLoadingDiscussion(true);
                setFoundDiscussion(false);
                ///FALTA PONER EL CONTENERDOR CON LA RESPUESTA
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
                        }
                    });
                }
                else{
                    if(response.status === 400){
                        setResponseComment(t("AddComentNotFound"));
                    }else{   
                        setResponseComment(t("ErrorMessage"));   
                    } 
                    setIcon(<BiError/>);
                    setClaseName("errorMessage");
                    setLoadingComment(true);
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

    const handleClickDeleteComment = (e, id) =>{
        e.preventDefault();
        helpHttp().delete(UrlAPI+"comments",{
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token")
            },
            body: {
                _id:id
            }
        }).then((response) => {
            if(!response.status){
                setNumberComments(numberComments-1);
                helpHttp().get(UrlAPI+"comments/"+discussion._id,{
                    headers: {
                        Accept: "application/json",
                        'Authorization': sessionStorage.getItem("token")
                    }
                }).then((response) => {
                    if(!response.status){
                        setComments(response);
                    }
                });
            }
            else{
                setResponseComment(t("ErrorMessage"));
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

    return {
        title,errors,loading,handleChange,handleSubmit,discussions,handleClickNews,handleClickPopulars,handleClickFollowing,handleBlur,
        discussion,handleClickDiscussion,response,loadingDiscussion,foundDiscussion,comments,
        imageAccount,handleChangeComment,handleSubmitComment,handleBlurComment,formComment,errorsComment,handleClickComment,
        loadingComment,icon,className,responseComment,commentLenght,numberComments
    }
};

/*export const useGetImageComment = () => {
    const [imageComment, setImageComment] = useState(ImageInformationAlt);
    //const [urlComment, setURLComment] = useState(undefined);
    
    const getImage = (urlComment) =>{
        console.log(urlComment)
        if(urlComment!= undefined){
            const url =  {
                URL: urlComment
            }
            fetch(UrlAPI+"resources",{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token")
                },
                body: JSON.stringify(url)
            }).then((response) => {
                if (response.ok) {
                    response.blob().then(responseBlob => {
                        var objectURL = URL.createObjectURL(responseBlob);
                        setImageComment(objectURL)
                    });
                } else {
                    setImageComment(ImageInformationAlt)
                }
            })
        } else{
            setImageComment(ImageInformationAlt)
        }
    }
    return {
        imageComment, getImage
    }
}

/*export const GetImage = (urlComment) =>{
    if(urlComment!= undefined){
        const url =  {
            URL: urlComment
        }
        fetch(UrlAPI+"resources",{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("token")
            },
            body: JSON.stringify(url)
        }).then((response) => {
            if (response.ok) {
                response.blob().then(responseBlob => {
                    var objectURL = URL.createObjectURL(responseBlob);
                    return objectURL
                });
            } else {
                return ImageInformationAlt
            }
        })
    } else{
        return ImageInformationAlt
    }
}*/

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
                        setIcon(<BiError/>);
                        setClaseName("errorMessage");
                        if(response.status === 400){
                            setResponse(t("SignUpVerificationSendNot"));
                        }else{
                            setResponse(t("ErrorMessage")); 
                        }
                        setLoading(true);
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
        form,errors,loading,response,className,handleChange,handleBlur,handleSubmit,icon,handleClickTheme,classInfo,classDoubt,classRule
    }
}