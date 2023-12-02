import "./Upload.scss";

import uploadVideo from "../../assets/Images/Upload-video-preview.jpg";

function Upload() {
  return (
    <>
      <h1 className="upload-title">Upload Video</h1>
      <div className="upload-page-container">
        <div className="thumbnail-container">
          <p className=" thumbnail-title"> VIDEO THUMBNAIL</p>
          <img src={uploadVideo} alt="thumbnail" className="thumbnail-photo" />
        </div>
        <div className="form-container">
          <div className="upload-form__title-container">
            <label htmlFor="title" className="upload-form__title-label">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload-form__title-input"
              type="text"
              id="title"
              name="title"
              placeholder="Add a title to your video"
            ></input>
          </div>
          <div className="upload-form__description-container">
            <label
              className="upload-form__description-label"
              htmlFor="description"
            >
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className="upload-form__description-input"
              type="text"
              id="description"
              name="description"
              placeholder="Add a description to your video"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="button-container">
        <div className="publish__btn">
          <button>Publish</button>
        </div>
        <button className="cancel-button">CANCEL</button>
      </div>
    </>
  );
}

export default Upload;
