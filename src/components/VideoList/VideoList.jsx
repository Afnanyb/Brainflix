import "./VideoList.scss";
function VideoList({ setSelectedVideo, selectedVideo, videos }) {
  return (
    <section className="video-list">
      <p className="video-list__title">NEXT VIDEO</p>
      {videos
        .filter((video) => video.id !== selectedVideo.id)
        .map((video, index) => {
          return (
            <section
              key={video.id}
              className="next-video"
              onClick={() => setSelectedVideo(video.id)}
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
