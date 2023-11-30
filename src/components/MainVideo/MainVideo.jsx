import "./MainVideo.scss";

function MainVideo({ video }) {
  // const dateFormat = new Date(video.timestamp).toLocaleDateString("en-US");
  return (
    <>
      <section className="video--details">
        <div className="video--details__image">
          <video poster={video.image} alt={video.image} />
          <div className="video--details__play"></div>
        </div>
      </section>
    </>
  );
}

export default MainVideo;
