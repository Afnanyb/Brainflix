import "./MainVideoPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import MainVideo from "../../components/MainVideo/MainVideo";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import { useParams } from "react-router-dom";

function MainVideoPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const params = useParams();
  let videoId;
  if (params.videoId) {
    videoId = params.videoId;
  } else {
    videoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  }

  useEffect(() => {
    async function getVideos() {
      const response = await axios.get(
        "https://project-2-api.herokuapp.com/videos?api_key=73dfb1cb-ef46-46ea-bdd9-5df6aeb591db"
      );

      setVideos(response.data);
    }
    getVideos();
  }, []);

  useEffect(() => {
    async function getVideoById() {
      const response = await axios.get(
        "https://project-2-api.herokuapp.com/videos/" +
          videoId +
          "?api_key=73dfb1cb-ef46-46ea-bdd9-5df6aeb591db"
      );

      setActiveVideo(response.data);
    }
    getVideoById();
  }, [videoId]);

  // const selectedVideo = videos.find((video) => video.id === id);
  if (!activeVideo) return "loading";
  console.log(activeVideo);

  return (
    <>
      <MainVideo video={activeVideo} />
      <div className="page--layout">
        <div className="active__video">
          <VideoDetails selectedVideo={activeVideo} />
          <CommentForm />
          <CommentList selectedVideo={activeVideo} />
        </div>
        <VideoList
          // setSelectedVideo={setId}
          selectedVideo={activeVideo}
          videos={videos}
        />
      </div>
    </>
  );
}

export default MainVideoPage;
