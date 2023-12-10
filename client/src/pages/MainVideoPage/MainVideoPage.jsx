import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../config";
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
      try {
        const response = await axios.get(`${baseUrl}/videos`);

        setVideos(response.data);
      } catch (error) {
        //  handle error
      }
    }
    getVideos();
  }, []);

  useEffect(() => {
    async function getVideoById() {
      try {
        const response = await axios.get(`${baseUrl}/videos/${videoId}`);

        setActiveVideo(response.data);
      } catch (error) {
        // handle error
      }
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
