import { useState } from "react";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlAPI} from "../helpers/helpHttp";
import {BiError, BiBadgeCheck} from 'react-icons/bi';
import UserImageDefault from '../assets/images/ide-29.svg';



export const useLoginForm = (initialForm, validateForm) => {
    const { t } = useTranslation();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [className, setClaseName] = useState("errorDelete");

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
    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(form));
        if(Object.keys(errors).length === 0){
            helpHttp().post(UrlAPI+"login",{
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json'
                },
                body: form
            }).then((response) => {
                if(response.token){
                    setLoading(false);
                    setTimeout(() => setResponse(null), 5000);
                    sessionStorage.setItem("name", response.account.name);
                    sessionStorage.setItem("lastname", response.account.lastname);
                    sessionStorage.setItem("token", response.token);
                    window.location.href = 'home';
                }else{
                    setClaseName("errorMessage");
                    if(response.status === 404){
                        setResponse(t("NotFoundLogin"));
                    }else{
                        if(response.status === 400){
                            setResponse(t("BadRequestLogin"));
                        }else{
                            if(response.status === 403){
                                setResponse(t("ForbiddentLogin"));
                            }else{   
                                setResponse(t("ErrorMessage"));   
                            }  
                        }
                    }
                    setLoading(true);
                }         
            });
        }
        else{
            return;
        }
    }
    return {
        form,errors,loading,response,className,handleChange,handleBlur,handleSubmit 
    }
};

export const useAccountForm = (initialForm, validateForm) => {
    const { t } = useTranslation();
    const [form, setForm] = useState(initialForm);
    const [cities, setCities] = useState([]);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [className, setClaseName] = useState("errorDelete");
    const [icon, setIcon] = useState(<BiError/>);
    const[namefile, setNameFile] = useState(UserImageDefault);
    const[urlFile, setUrlFile] = useState(null);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        if(name==="dateBirth"){
            const dateBirth = new Date(value).getFullYear();
            const dateNow = new Date().getFullYear();
            const age = dateNow- dateBirth;
            setForm({
                ...form,
                age:age,
                [name]:value,
            });
        }
        else{
            setForm({
                ...form,
                [name]:value,
            });
        }
    }

    const handleChangeImage = (e) =>{
        let file = e.target.files[0];
        if(file){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.addEventListener("load", (e) => {
                setNameFile(e.target.result);
                setUrlFile(file);
            })  
        }
        else {
            setUrlFile(null);
            setNameFile(UserImageDefault);
        }
    }

    const handleChangeState = (e) =>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value,
        });
        if(value){
            helpHttp().get(UrlAPI+"cities/"+value).then((response) => {
                if(!response.status){
                    setCities(response)
                }
                else{
                    setCities([])
                }
            })
        }
        else{
            setCities([])
        }
    }
    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validateForm(form));
        if(Object.keys(errors).length === 0){
            fetch(UrlAPI+"accounts",{
                method: 'POST',
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }).then((response) => {
                if(response.ok){
                    response.json().then(responseJson => {
                        const idAccount = responseJson._id;
                        sessionStorage.setItem("username", responseJson.username);
                        sessionStorage.setItem("email", responseJson.email);

                        setIcon(<BiBadgeCheck/>);
                        setClaseName("successfulMessage");
                        setResponse(t("MessageCreateAccount"));
                        setTimeout(() => setLoading(true), 5000);
                        if(urlFile!=null){
                            var formData = new FormData();
                            formData.append('idAccount', idAccount);
                            formData.append('file', urlFile);
                            fetch(UrlAPI+"resources/account",{
                                method: 'POST',
                                body: formData
                            }).then((response) => {

                            })
                        }
                    });
                }else{
                    setIcon(<BiError/>);
                    setClaseName("errorMessage");
                    if(response.status === 409){
                        setResponse(t("ErrorExistAccount"));
                    }else{
                        if(response.status === 400){
                            setResponse(t("BadRequestAccount"));
                        }else{   
                            setResponse(t("ErrorMessage"));   
                        }  
                    }
                    setLoading(true);
                }         
            });
        }
        else{
            return;
        }
    }
    return {
        handleChangeState, cities,form,errors,loading,response,className,handleChange,handleBlur,handleSubmit,icon,namefile,handleChangeImage,urlFile
    }
};

export const useVerificationForm = (validateCode) => {
    const { t } = useTranslation();
    const [code, setCode] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [className, setClaseName] = useState("errorDelete");
    const [icon, setIcon] = useState(<BiError/>);

    const handleChange = (e) =>{
        const {value} = e.target;
        setCode(value);
    }

    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateCode(code));
    }

    const handleSubmitVerification = (e) =>{
        e.preventDefault();
        setErrors(validateCode(code));
        if(Object.keys(errors).length === 0){
            if(sessionStorage.getItem("username")){
                const confirmation = {
                    username: sessionStorage.getItem("username"),
                    codeConfirmation: parseInt(code)
                }
                helpHttp().patch(UrlAPI+"login",{
                    headers: {
                        Accept: "application/json",
                        'Content-Type': 'application/json'
                    },
                    body: confirmation
                }).then((response) => {
                    if(response.message){
                        setIcon(<BiBadgeCheck/>);
                        setClaseName("successfulMessage");
                        setResponse(t("SignUpVerificationSuccessful"));
                        setTimeout(() => setLoading(true), 5000);
                        sessionStorage.clear();
                        window.location.href = 'login'; 
                    }
                    else{
                        if(response.status === 404){
                            setResponse(t("SignUpVerificationNotFound"));
                        }else{
                            if(response.status === 400){
                                setResponse(t("SignUpVerificationInvalidCode"));
                            }else{   
                                setResponse(t("ErrorMessage"));   
                            }  
                        }
                        setIcon(<BiError/>);
                        setClaseName("errorMessage");
                        setTimeout(() => setLoading(true), 5000);
                    }
                })
            }
            else{
                setResponse(t("SignUpVerificationSendNot"));
                setIcon(<BiError/>);
                setClaseName("errorMessage");
                setTimeout(() => setLoading(true), 5000);
            }
        }
        else {
            return;
        }
    }

    const handleClickSendCode = (e) =>{
        e.preventDefault();
        const formEmail = {
            email: sessionStorage.getItem("email")
        }
        helpHttp().post(UrlAPI+"emails",{
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: formEmail
        }).then((response) => {
            if(response.message){
                setIcon(<BiBadgeCheck/>);
                setClaseName("successfulMessage");
                setResponse(t("SignUpVerificationSendSuccessful"));
                setTimeout(() => setLoading(true), 5000);
            }
            else{
                if(response.status === 404){
                    setResponse(t("SignUpVerificationSendNot"));
                }else{
                    if(response.status === 400){
                        setResponse(t("SignUpVerificationInvalidEmail"));
                    }else{   
                        setResponse(t("ErrorMessage"));   
                    }  
                }
                setIcon(<BiError/>);
                setClaseName("errorMessage");
                setTimeout(() => setLoading(true), 5000);
            }
        })
    }

    return {
        code,errors,loading,response,className,handleChange,handleBlur,icon,handleClickSendCode,handleSubmitVerification
    }
};