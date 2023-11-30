import "./MainVideoPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import MainVideo from "../../components/MainVideo/MainVideo";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";

function MainVideoPage() {
  const [videos, setVideos] = useState([]);
  const [id, setId] = useState(null);
  useEffect(() => {
    async function getVideos() {
      const response = await axios.get(
        "https://project-2-api.herokuapp.com/videos?api_key=73dfb1cb-ef46-46ea-bdd9-5df6aeb591db"
      );
      setVideos(response.data);
      setId(response.data[0].id);
    }
    getVideos();
  }, []);

  const selectedVideo = videos.find((video) => video.id === id);
  if (!selectedVideo) return "loading";
  return (
    <>
      <MainVideo video={selectedVideo} />
      {/* <VideoDetails /> */}
      {/* <CommentForm /> */}
      {/* <CommentList comments={selectedVideo.comments} /> */}
      <VideoList
        setSelectedVideo={setId}
        selectedVideo={selectedVideo}
        videos={videos}
      />
    </>
  );
}

export default MainVideoPage;
