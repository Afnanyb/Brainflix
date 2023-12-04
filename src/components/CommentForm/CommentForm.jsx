import "./CommentForm.scss";
import Image from "../../assets/Images/Mohan-muruge.jpg";
import Icon from "../../assets/Icons/add_comment.svg";

function CommentForm() {
  return (
    <div className="comment-form">
      <p className="comment-form__comment--count"> 3 Comments </p>
      <div className="comment-form__container">
        <div className="comment-form__img">
          <img className="comment-form__avatar " src={Image} />
        </div>

        <form method="get" className="comment-form__section">
          <label htmlFor="comment" className="comment-form__label">
            JOIN THE CONVERSATION
          </label>
          <div className="wrapper">
            <textarea
              placeholder="Add a new Comment"
              type="text area"
              className="comment-form__text"
              id="comment"
              required=""
            />
            <button className="comment-form__button">
              <img src={Icon} />
              COMMENT{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
