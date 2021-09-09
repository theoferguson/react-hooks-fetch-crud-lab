import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [issueRequest, setIssueRequest] = useState(false)

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm issueRequest={issueRequest} setIssueRequest={setIssueRequest} /> : <QuestionList issueRequest={issueRequest} setIssueRequest={setIssueRequest} />}
    </main>
  );
}

export default App;
