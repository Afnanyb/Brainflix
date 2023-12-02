import "./MainVideo.scss";

function MainVideo({ video }) {
  // const dateFormat = new Date(video.timestamp).toLocaleDateString("en-US");
  return (
    <>
      <section className="video--details">
        <div className="video--details__image">
          <video
            src={video.video + "?api_key=73dfb1cb-ef46-46ea-bdd9-5df6aeb591db"}
            alt={video.image}
            controls
          />
          <div className="video--details__play"></div>
        </div>
      </section>
    </>
  );
}

export default MainVideo;
