import { useState } from "react";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlAPI} from "../helpers/helpHttp";
import {BiError, BiBadgeCheck} from "react-icons/bi";

export const useReportForm = (initialForm,validateForm, id) => {
    const { t } = useTranslation();
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [className, setClaseName] = useState("errorDelete");
    const [icon, setIcon] = useState(<BiError/>);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value,
            accountReported:id
        });
    }

    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validateForm(form));
    }

    const handleSubmit = (e,setStatusModal,setModalToken) =>{
        e.preventDefault();
        setErrors(validateForm(form));
        if(Object.keys(errors).length === 0){
            helpHttp().post(UrlAPI+"reports",{
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token")
                },
                body: form
            }).then((response) => {
                if(response._id){
                    setModalToken(false);
                    setIcon(<BiBadgeCheck/>);
                    setClaseName("successfulMessage");
                    setResponse(t("ReportUserSuccessful"));
                    setLoading(true);
                    setTimeout(() => setStatusModal(false), 1600);
                }
                else{
                    if(response.status === 419){
                        setStatusModal(false);
                        setModalToken(true);
                    }else{
                        setModalToken(false);
                        if(response.status === 400){
                            setResponse(t("SignUpVerificationSendNot"));
                        }else{   
                            setResponse(t("ErrorMessage"));   
                        } 
                        setIcon(<BiError/>);
                        setClaseName("errorMessage");
                        setLoading(true);
                    }
                }
            })
        }
        else {
            return;
        }
    }
    return {
        form,errors,loading,response,className,handleChange,handleBlur,icon,handleSubmit
    }
}
