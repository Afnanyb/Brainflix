import { useNavigate } from "react-router-dom";
import "./VideoList.scss";

function VideoList({ videoId, videos = [] }) {
  const navigate = useNavigate();

  return (
    <section className="video-list">
      <p className="video-list__title">NEXT VIDEO</p>
      {videos
        .filter((video) => video.id !== videoId)
        .map((video) => {
          return (
            <section
              onClick={() => navigate(`/${video.id}`)}
              key={video.id}
              className="next-video"
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
