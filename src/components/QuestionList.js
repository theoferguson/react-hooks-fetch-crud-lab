import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({issueRequest, setIssueRequest}) {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(json => {
      setQuestions(json)
    })
  }, [issueRequest])


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => { return (
        <QuestionItem key={question.id} question={question} issueRequest={issueRequest} setIssueRequest={setIssueRequest} />
        )
      })}
      </ul>
    </section>
  );
}

export default QuestionList;
