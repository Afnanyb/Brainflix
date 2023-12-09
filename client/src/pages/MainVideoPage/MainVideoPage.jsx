import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./MainVideoPage.scss";
import MainVideo from "../../components/MainVideo/MainVideo";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";

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
      const response = await axios.get("http://localhost:8080/videos");

      setVideos(response.data);
    }
    getVideos();
  }, []);

  useEffect(() => {
    async function getVideoById() {
      const response = await axios.get(
        `http://localhost:8080/videos/${videoId}`
      );

      setActiveVideo(response.data);
    }
    getVideoById();
  }, [videoId]);

  if (!activeVideo) return "loading";
  return (
    <>
      <MainVideo video={activeVideo} />
      <div className="page--layout">
        <div className="active__video">
          <VideoDetails selectedVideo={activeVideo} />
          <CommentForm />
          <CommentList selectedVideo={activeVideo} />
        </div>
        <VideoList videoId={videoId} videos={videos} />
      </div>
    </>
  );
}

export default MainVideoPage;
