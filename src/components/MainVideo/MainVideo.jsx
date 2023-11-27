import "./MainVideo.scss";
// import Play from "../../assets/Icons/play.svg";
// import Scrub from "../../assets/Icons/scrub.svg";
// import FullScreen from "../../assets/Icons/fullscreen.svg";
// import Volume_up from "../../assets/Icons/volume_up.svg";

function MainVideo({ video }) {
  const dateFormat = new Date(video.timestamp).toLocaleDateString("en-US");
  return (
    <>
      <section className="video--details">
        <div className="video--details__image">
          <video poster={video.image} alt={video.image} />
          <div className="video--details__play"></div>
        </div>
        {/* working on adding the poster's icons ,did not have time to finish it */}
        {/* <div className="video__cont">
          <p>{video.duration}</p>
          <img src={Play} />
          <img src={Scrub} />
          <img src={FullScreen} />
          <img src={Volume_up} />
        </div> */}
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
