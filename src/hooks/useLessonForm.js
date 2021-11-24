import { useState } from "react";
import { useTranslation } from "react-i18next";
import { helpHttp, UrlAPI } from "../helpers/helpHttp";

export const useLessonForm = (setQuestion, questionsChange, setQuestionsChange, setAnswers, question, answers) => {
    const { t } = useTranslation();
    const [pointsObtained, setPointsObtained] = useState(0);
    const [valueOnly, setValueOnly] = useState(null);
    const [valueMultiple, setValueMultiple] = useState([]);
    const [loading, setLoading] = useState(false);
    const [countAnswer, setCountAnswer] = useState(0);
    const [loadingError, setLoadingError] = useState(false);

    const handleChangeAnswerOnly = (e) => {
        e.preventDefault();
        const {value} = e.target;
        setValueOnly(value);
    }

    const handleChangeAnswerMultiple = (e) => {
        e.preventDefault();
        const {value} = e.target;
        setValueMultiple({
            ...valueMultiple,
            value,
        });
    }

    const validateQuestions = () =>{
        const isValid = false;
        if(question.typeQuestion === "only"){
            const answerValid = answers.find(element => element.isValid===true);
            if(valueOnly != null){
                isValid = true;
                if(valueOnly === answerValid.answers){
                    setPointsObtained(pointsObtained+question.score)
                }
            }else{
                isValid = false;
            }
        }else {
            const answersValid = answers.filter(element => element.isValid===true);
            if(valueMultiple.length>0){
                isValid = true;
                answers.forEach(elementAnswer => {
                    valueMultiple.forEach(elementValue => {
                        if(elementAnswer.answers === elementValue){
                            setCountAnswer(countAnswer+1);
                        }
                    });
                });
                if(countAnswer === answersValid.length){
                    setPointsObtained(pointsObtained+question.score)
                }
            }else{
                isValid = false;
            }
        }
        return isValid;
    }

    const handleClickNext = (e) => {
        e.preventDefault();
        if(validateQuestions()){
            helpHttp().get(UrlAPI + "answers/"+questionsChange[1]._id,{
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token")
                }
            }).then((responseAnswers) => {
                if (responseAnswers.length>0) {
                    setAnswers(responseAnswers);
                    setQuestion(questionsChange[1]);
                    setQuestionsChange(questionsChange.filter(element => element._id!==question._id));
                    
                    setValueOnly(null);
                    setValueMultiple([]);
                    setLoading(false);
                    setCountAnswer(0);
                    setLoadingError(false);
                }else{
                    setLoadingError(true);
                }
            })
        }else{
            setLoading(true);
        }
    }

    const handleClick = (e, idLesson) => {
        e.preventDefault();
        if(validateQuestions()){
            const lessonRecord = {
                pointsObtained: pointsObtained, 
                idAccount:sessionStorage.getItem("id"), 
                idLesson:idLesson
            }
            helpHttp().post(UrlAPI + "lessonRecords",{
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("token")
                },
                body: lessonRecord
            }).then((response) => {
                if (response._id) {
                    
                }else{
                    setLoadingError(true);
                }
            })
        }else{
            setLoading(true);
        }
    }

    return {
        handleClick,handleClickNext,handleChangeAnswerOnly,handleChangeAnswerMultiple,loading,loadingError
    }
};

