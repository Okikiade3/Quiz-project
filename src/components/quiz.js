 import { useState, useEffect } from 'react';
 import './quiz.css';
 import useSound from 'use-sound';
 import correct from '../assets/correct.mp3';
 import play from '../assets/play.mp3';
 import wrong from '../assets/wrong.mp3';
 
export default function Quiz({data, setStopTime, questionNumber, setQuestionNumber}) {

  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [clickedAnswer, setClickedAnswer] = useState("answer");
  const [playSound] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    playSound()
  }, [playSound])

  useEffect(() => {
      setQuestion(data[questionNumber -1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

const handleClick = (a) => {
    setSelectedAnswer(a)
    setClickedAnswer("answer active")

    delay(1000, () => setClickedAnswer(a.correct ? "answer correct" : "answer wrong"));
    delay(4000, () => {
        if(a.correct) {
          correctAnswer()
          delay(2000, () => {
              setQuestionNumber(prev => prev + 1); 
            setSelectedAnswer(null);
    })

  }

  else {
    wrongAnswer()
    delay(1000, () => {
      setStopTime(true); 
    })             
        
  }
});  
}

  return (
    <div className="quiz">
      <div className="questions">{question?.question}</div>
      <div className="answers">
        {question?.answer.map(a => ( 
        <div className={selectedAnswer === a ? 
          clickedAnswer : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
          ))}
      </div>
    </div>
  )
}

