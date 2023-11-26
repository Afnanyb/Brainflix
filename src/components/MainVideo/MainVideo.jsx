import "./MainVideo.scss";

function MainVideo({ video }) {
  const dateFormat = new Date(video.timestamp).toLocaleDateString("en-US");
  return (
    <>
      <section className="video--details">
        <div className="video--details__image">
          <video poster={video.image} alt={video.image} />
          <div className="video--details__play"></div>
        </div>
        <div>
          <h6>{video.duration} </h6>
        </div>
        <h1 className="video--details__title">{video.title} </h1>
        <div className="video--details__container">
          <div className="video-details__left">
            <h3 className="video--details__channel--bold">
              By {video.channel}{" "}
            </h3>
            <p className="video--details__timestamp">{dateFormat} </p>
          </div>
          <div className="video-details__right">
            <p className="video--details__views">
              <div className="video--details__views--icon"> </div>
              {video.views}
            </p>
            <p className="video--details__likes">
              <div className="video--details__likes--icon"> </div>
              {video.likes}
            </p>
          </div>
        </div>
        <p className="video--details__description">{video.description} </p>
      </section>
    </>
  );
}

export default MainVideo;
