function CommentRenderer({ comment }) {
  return (
    <div className="commentContainer">
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
    </div>
  );
}

export default CommentRenderer;


