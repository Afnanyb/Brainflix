import "./App.scss";
import Header from "./components/Header/Header";
import videos from "./Data/video-details.json";
import MainVideo from "./components/MainVideo/MainVideo";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentList from "./components/CommentList/CommentList";
import VideoList from "./components/VideoList/VideoList";
import { useState } from "react";
import VideoDetails from "./components/VideoDetails/VideoDetails";

function App() {
  const firstVideo = videos[0];
  const [id, setId] = useState(firstVideo.id);

  const selectedVideo = videos.find((video) => video.id === id);

  console.log(selectedVideo);
  return (
    <>
      <Header />
      <MainVideo video={selectedVideo} />
      <VideoDetails />
      <CommentForm />
      <CommentList comments={selectedVideo.comments} />
      <VideoList setSelectedVideo={setId} selectedVideo={selectedVideo} />
    </>
  );
}

export default App;
