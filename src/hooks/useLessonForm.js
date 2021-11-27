import { useState, useEffect } from "react";
import { helpHttp, UrlAPI } from "../helpers/helpHttp";

export const useLessonForm = (
  setQuestion,
  questionsChange,
  setQuestionsChange,
  setAnswers,
  question,
  answers,
  setVisible,
  setModalNotToken,
  setModalToken,
  lesson
) => {
  const [pointsObtained, setPointsObtained] = useState(0);
  const [valueOnly, setValueOnly] = useState(null);
  const [valueMultiple, setValueMultiple] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [resultsQuestions, setResultsQuestions] = useState([]);
  const [idLesson, setIdLesson] = useState(lesson);
  const [isFinishLesson, setIsFinishLesson] = useState(false);

  const handleChangeAnswerOnly = (e) => {
    e.stopPropagation();
    const { value } = e.target;
    setValueOnly(value);
  };

  const handleChangeAnswerMultiple = (e) => {
    e.preventDefault();
    const { value, checked } = e.target;
    if (checked) {
      setValueMultiple((valueMultiple) => [...valueMultiple, { value }]);
    } else {
      setValueMultiple(
        valueMultiple.filter((elementValue) => elementValue.value !== value)
      );
    }
  };

  const setActiveClassFilterRadioButtons = () => {
    var radioButtons = document.querySelectorAll(".radiobutton");
    for (let i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;
    }
  };

  const validateQuestions = async() => {
    let isValid = false;
    if (question.typeQuestion === "only") {
      const answerValid = answers.find((element) => element.isValid === true);
      let pointsAnswer = 0;
      if (valueOnly != null) {
        isValid = true;
        let isCorrectAnswer = false;
        if (valueOnly === answerValid.answers) {
          setPointsObtained(
            (pointsObtained) => question.score+pointsObtained
          );
          isCorrectAnswer = true;
          pointsAnswer = question.score;
        }
        setResultsQuestions((resultsQuestions) => [
          ...resultsQuestions,
          {
            question,
            answerAccount: valueOnly,
            answers,
            isCorrect: isCorrectAnswer,
            pointsAnswer,
          },
        ]);
      } else {
        isValid = false;
      }
    } else {
      const answersValid = answers.filter(
        (element) => element.isValid === true
      );
      let pointsAnswer = 0;
      let countAnswer = 0;
      if (valueMultiple.length > 0) {
        isValid = true;
        let isCorrectAnswer = false;
        if (answersValid.length === valueMultiple.length) {
          answersValid.forEach((elementAnswer) => {
            valueMultiple.forEach((elementValue) => {
              if (elementAnswer.answers === elementValue.value) {
                countAnswer = countAnswer + 1;
              }
            });
          });
          if (countAnswer === answersValid.length) {
            setPointsObtained(
              (pointsObtained) => question.score+pointsObtained
            );
            isCorrectAnswer = true;
            pointsAnswer = question.score;
          }
        }
        setResultsQuestions((resultsQuestions) => [
          ...resultsQuestions,
          {
            question,
            answerAccount: valueMultiple,
            answers,
            isCorrect: isCorrectAnswer,
            pointsAnswer,
          },
        ]);
      } else {
        isValid = false;
      }
    }
    return isValid;
  };
  
  const handleClickNext = async(e) => {
    e.preventDefault();
    const isValid = await validateQuestions();
    if (isValid) {
      helpHttp()
        .get(UrlAPI + "answers/" + questionsChange[1]._id, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("token"),
          },
        })
        .then(async (responseAnswers) => {
          if (responseAnswers.length > 0) {
            setActiveClassFilterRadioButtons();
            setAnswers(responseAnswers);
            setQuestion(questionsChange[1]);
            setQuestionsChange(
              questionsChange.filter((element) => element._id !== question._id)
            );
            setValueOnly(null);
            setValueMultiple([]);
            setLoading(false);
            setLoadingError(false);
          } else {
            if (responseAnswers.status === 419) {
              setModalNotToken(false);
              setModalToken(true);
            } else {
              if (responseAnswers.status === 401) {
                setModalToken(false);
                setModalNotToken(true);
              } else {
                setLoadingError(true);
              }
            }
          }
        });
    } else {
      setLoading(true);
    }
  };
  
  const handleClick = async (e) => {
    e.preventDefault();
    const isValid = await validateQuestions();
    if (isValid) {
      setIsFinishLesson(true);
    } else {
      setLoading(true);
    }
  };
  useEffect(() => {
    if(isFinishLesson){
      helpHttp()
      .post(UrlAPI + "lessonRecords", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token"),
        },
        body: {
          pointsObtained,
          idAccount: sessionStorage.getItem("id"),
          idLesson,
        },
      })
      .then((response) => {
        if (response._id) {
          setVisible(true);
          setIsFinishLesson(false);
        } else {
          if (response.status === 419) {
            setModalNotToken(false);
            setModalToken(true);
          } else {
            if (response.status === 401) {
              setModalToken(false);
                setModalNotToken(true);
            } else {
              setLoadingError(true);
            }
          }
        }
      });
    }
  },[isFinishLesson,idLesson,pointsObtained,setVisible,setModalNotToken,setModalNotToken,setLoadingError,helpHttp,UrlAPI,setIsFinishLesson]);

  return {
    handleClick,
    handleClickNext,
    handleChangeAnswerOnly,
    handleChangeAnswerMultiple,
    loading,
    loadingError,
    pointsObtained,
    resultsQuestions,
  };
};
