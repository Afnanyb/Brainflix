import axios from "axios";
import { useEffect, useState } from "react";

import "./Upload.scss";

import uploadVideo from "../../assets/Images/Upload-video-preview.jpg";

function Upload() {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");

  async function postVideo() {
    const response = await axios.post("http://localhost:8080/videos", {
      videoTitle,
      videoDescription,
    });
  }

  return (
    <>
      <div className="upload__body">
        <h1 className="upload-title">Upload Video</h1>
        <div className="upload-page-container">
          <div className="thumbnail-container">
            <p className=" thumbnail-title">VIDEO THUMBNAIL</p>
            <img
              src={uploadVideo}
              alt="thumbnail"
              className="thumbnail-photo"
            />
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
                value={videoTitle}
                onChange={(event) => setVideoTitle(event.target.value)}
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
                value={videoDescription}
                onChange={(event) => setVideoDescription(event.target.value)}
                placeholder="Add a description to your video"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button onClick={postVideo} className="publish__button">
            PUBLISH
          </button>

          <button className="cancel-button">CANCEL</button>
        </div>
      </div>
    </>
  );
}

export default Upload;
