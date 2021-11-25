import { useState } from "react";
import { helpHttp, UrlAPI } from "../helpers/helpHttp";

export const useLessonForm = (setQuestion, questionsChange, setQuestionsChange, setAnswers, question, answers, setVisible, setModalNotToken, setModalToken) => {
    const [pointsObtained, setPointsObtained] = useState(0);
    const [valueOnly, setValueOnly] = useState(null);
    const [valueMultiple, setValueMultiple] = useState([]);
    const [loading, setLoading] = useState(false);
    const [countAnswer, setCountAnswer] = useState(0);
    const [loadingError, setLoadingError] = useState(false);
    const[resultsQuestions, setResultsQuestions] = useState([]);

    const handleChangeAnswerOnly = (e) => {
        e.stopPropagation();
        const {value} = e.target;
        setValueOnly(value);
    }

    const handleChangeAnswerMultiple = (e) => {
        e.preventDefault();
        const {value,checked} = e.target;
        if(checked){
            setValueMultiple(valueMultiple => [...valueMultiple, {value:value}]);
        }else{
            setValueMultiple(valueMultiple.filter(elementValue =>elementValue.value!==value));
        }
    }

    const setActiveClassFilterRadioButtons = () => {
        var radioButtons = document.querySelectorAll(".radiobutton");
        for ( let i = 0; i < radioButtons.length; i++ ) {
            radioButtons[i].checked = false;
        }
    }

    const validateQuestions = () =>{
        let isValid = false;
        if(question.typeQuestion === "only"){
            const answerValid = answers.find(element => element.isValid===true);
            if(valueOnly != null){
                isValid = true;
                let isCorrectAnswer= false;
                if(valueOnly === answerValid.answers){
                    setPointsObtained(pointsObtained+question.score);
                    isCorrectAnswer=true;
                }
                setResultsQuestions(resultsQuestions => [...resultsQuestions, {question:question,answerValid:answerValid,answerAccount:valueOnly,isCorrect:isCorrectAnswer}]);
            }else{
                isValid = false;
            }
        }else {
            const answersValid = answers.filter(element => element.isValid===true);
            if(valueMultiple.length>0){
                isValid = true;
                let isCorrectAnswer= false;
                if(answersValid.length === valueMultiple.length){
                    answersValid.forEach(elementAnswer => {
                        valueMultiple.forEach(elementValue => {
                            if(elementAnswer.answers === elementValue.value){
                                setCountAnswer(countAnswer+1);
                            }
                        });
                    });
                    if(countAnswer === answersValid.length){
                        setPointsObtained(pointsObtained+question.score);
                        isCorrectAnswer=true;
                    }
                }
                setResultsQuestions(resultsQuestions => [...resultsQuestions, {question:question,answerValid:answersValid,answerAccount:valueMultiple,isCorrect:isCorrectAnswer}]);
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
                    setActiveClassFilterRadioButtons();
                    setAnswers(responseAnswers);
                    setQuestion(questionsChange[1]);
                    setQuestionsChange(questionsChange.filter(element => element._id!==question._id));
                    
                    setValueOnly(null);
                    setValueMultiple([]);
                    setLoading(false);
                    setCountAnswer(0);
                    setLoadingError(false);
                }else{
                    if(responseAnswers.status === 419){
                        setModalNotToken(false);
                        setModalToken(true);
                    }else{
                        if(responseAnswers.status === 401){
                            setModalToken(false);
                            setModalNotToken(true);
                        }else{
                            setLoadingError(true);
                        }
                    }
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
                    setVisible(true);
                }else{
                    if(response.status === 419){
                        setModalNotToken(false);
                        setModalToken(true);
                    }else{
                        if(response.status === 401){
                            setModalToken(false);
                            setModalNotToken(true);
                        }else{
                            setLoadingError(true);
                        }
                    }
                }
            })
        }else{
            setLoading(true);
        }
    }

    return {
        handleClick,handleClickNext,handleChangeAnswerOnly,handleChangeAnswerMultiple,loading,loadingError,pointsObtained,resultsQuestions
    }
};

