import videos from "../../Data/video-details.json";
import "./VideoList.scss";
function VideoList({ setSelectedVideo }) {
  return (
    <section className="video-list">
      <p className="video-list__title">NEXT VIDEO</p>
      {videos.map((video, index) => {
        return (
          <section
            key={video.id}
            className="next-video"
            onClick={() => setSelectedVideo(index)}
          >
            <video
              className="next-video__thumbnail"
              poster={video.image}
            ></video>
            <div className="next-video__details">
              <h3 className="next-video__title"> {video.title}</h3>
              <p className="next-video__channel"> {video.channel}</p>
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default VideoList;
