import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import videos from "./Data/video-details.json";
import MainVideo from "./components/MainVideo/MainVideo";
import CommentForm from "./components/CommentForm/CommentForm";
import VideoList from "./components/VideoList/VideoList";

function App() {
  const [index, setIndex] = useState(0);
  const selectedVideo = videos[index];

  console.log(selectedVideo);
  return (
    <>
      <Header />
      <MainVideo video={selectedVideo} />

      <CommentForm />
      {/* <CommentList /> */}
      <VideoList setSelectedVideo={setIndex} />
    </>
  );
}

export default App;
