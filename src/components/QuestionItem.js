import React from "react";

function QuestionItem({ question, issueRequest, setIssueRequest}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(
      setIssueRequest(!issueRequest)
    )
  }

  function handleAnswer(event) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correctIndex: event.target.value
      })
    }).then(
      setIssueRequest(!issueRequest),
    )
    
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
