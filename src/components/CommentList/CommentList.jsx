import "./CommentList.scss";

function CommentList({ comments }) {
  console.log(comments);
  return (
    <section className="comments">
      {comments.map((comment) => {
        const commentTime = new Date(comment.timestamp).toLocaleDateString(
          "en-US"
        );
        return (
          <article key={comment.id} className="comments__comment comment">
            {/* <Avatar /> */}
            <div className="comment__content">
              <div className="comment__info">
                <p className="comment__name"> {comment.name}</p>
                <p className="comment__date">{commentTime}</p>
              </div>
              <p className="comments__text">{comment.comment}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
export default CommentList;
