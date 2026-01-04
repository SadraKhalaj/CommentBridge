import { useEffect, useState } from "react";
import "./App.css";
import CommentRenderer from "./components/CommentRenderer/CommentRenderer";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );

      const data = await response.json();

      setComments(data);
      console.log(data);
    }

    getData();
  }, []);

  return (
    <div className="container">
      <p className="dih">Comments</p>
      <hr />
      <CommentRenderer comments={comments} />
    </div>
  );
}

export default App;
