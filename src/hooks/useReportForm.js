import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlAPI } from "../helpers/helpHttp";
import { BiError, BiBadgeCheck } from "react-icons/bi";
import { NUMBER } from "../helpers/Number";
import { RESPONSE_STATUS } from "../helpers/Response";
import { ModalContext } from "../helpers/ModalContext";
import AlertMessage from "../components/alert/AlertMessage";


export const useReportForm = (initialForm, validateForm, id) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [className, setClaseName] = useState("errorDelete");
  const [icon, setIcon] = useState(<BiError />);

  const { setStatusModal, setComponent } = useContext(ModalContext);

  const handleModal = (ComponentTagA, sizeHeightA, sizeWidthA, handleModalFunction,  titleA) => {
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

  const handleModalForum =  (content, handleModalFunction, title) => {
    handleModal(<AlertMessage content={content} handleModal={handleModalFunction}></AlertMessage>,"180px","450px",handleModalFunction,title);
  } 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
      accountReported: id,
      idAccount: sessionStorage.getItem("id"),
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e, setStatusModal) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === NUMBER.ZERO) {
      setForm({
        ...form,
        idAccount: sessionStorage.getItem("id"),
        accountReported: id,
      });
      helpHttp()
        .post(UrlAPI + "reports", {
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
            setResponse(t("ReportUserSuccessful"));
            setLoading(true);
            setTimeout(() => setStatusModal(false), 1600);
          } else {
            if (response.status === RESPONSE_STATUS.INSUFFICIENT_SPACE) {
              setStatusModal(false);
              handleModalForum(t("RefreshToken"),() => { window.location.href = "login";});
            } else {
              if (response.status === RESPONSE_STATUS.BAD_REQUEST) {
                setResponse(t("SignUpVerificationSendNot"));
              } else {
                setResponse(t("ErrorMessage"));
              }
              setIcon(<BiError />);
              setClaseName("errorMessage");
              setLoading(true);
            }
          }
        });
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
    icon,
    handleSubmit,
  };
};
