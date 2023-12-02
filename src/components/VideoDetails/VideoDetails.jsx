import "./VideoDetails.scss";

function VideoDetails({ selectedVideo }) {
  const timeFormat = new Date(selectedVideo.timestamp).toLocaleDateString(
    "en-US"
  );
  return (
    <>
      <section className="video-details">
        <h1 className="video-details__title">{selectedVideo.title}</h1>
        <div className="video-details__container">
          <div className="video-details__left left">
            <p className="left__info left__info--bold">
              By {selectedVideo.channel}
            </p>
            <p className="left__info">{timeFormat}</p>
          </div>
          <div className="video-details__right right">
            <p className="right__info">
              <i className="video-details__view-icon"></i>
              {selectedVideo.likes}
            </p>
            <p className="right__info">
              <i className="video-details__like-icon"></i>
              {selectedVideo.views}
            </p>
          </div>
        </div>
        <div className="video-details__description">
          {selectedVideo.description}
        </div>
      </section>
    </>
  );
}

export default VideoDetails;
