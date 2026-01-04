const CommentRenderer = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <div className="commentContainer">
          <p>{comment.name}</p>
          <h1>{comment.body}</h1>
        </div>
      ))}
    </>
  );
};

export default CommentRenderer;
