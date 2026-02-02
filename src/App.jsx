import { useEffect, useReducer, useState } from "react";
import "./App.css";
import CommentRenderer from "./components/CommentRenderer/CommentRenderer";
const INITIAL_STATE = {
  comments: [],
  isLoading: false,
  errors: null,
};

function commentReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        comments: [],
        isLoading: false,
        errors: null,
      };

      break;

    case "succcessfull":
      return {
        comments: action.payload,
        isLoading: false,
        errors: null,
      };

      break;

    case "faild":
      return {
        comments: [],
        isLoading: false,
        errors: action.payload,
      };

    default:
      break;
  }
}

function App() {
  const [comments, dispatch] = useReducer(commentReducer, INITIAL_STATE);

  console.log(comments);

  useEffect(() => {
    async function getComments() {
      try {
        dispatch({ type: "loading" });

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments",
        );

        const data = await response.json();
        dispatch({ type: "succcessfull", payload: data });
      } catch (error) {
        dispatch({ type: "faild", payload: error });
      }
    }

    getComments();
  }, []);

  return (
    <div className="App">
      <h1>Comments</h1>
      <hr />
      {comments.comments.map((comment) => (
        <CommentRenderer key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default App;
