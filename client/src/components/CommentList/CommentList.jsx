import "./CommentList.scss";

function CommentList({ selectedVideo }) {
  const commentList = selectedVideo.comments.map((comment) => {
    const commentTime = new Date(comment.timestamp).toLocaleDateString("en-US");
    return (
      <article key={comment.id} className="comments__comment comment">
        <div className="comment__container">
          <div className="comment__img"></div>
          <div className="comment__content">
            <div className="comment__info">
              <p className="comment__name"> {comment.name}</p>
              <p className="comment__date">{commentTime}</p>
            </div>
            <p className="comments__text">{comment.comment}</p>
          </div>
        </div>
      </article>
    );
  });
  return <section className="comment">{commentList}</section>;
}
export default CommentList;
