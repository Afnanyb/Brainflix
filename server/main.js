import cors from "cors";
import express, { request, response } from "express";
import { v4 as uuidv4 } from "uuid";
import videolist from "./videolist.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/videos", (request, response) => {
  response.json(videolist);
});

app.get("/videos/:id", (request, response) => {
  console.log(request.params);
  const video = videolist.find((video) => video.id === request.params.id);
  if (video) {
    response.json(video);
  } else {
    response.status(400).json({ message: "Can't find video" });
  }
});
app.post("/videos", (request, response) => {
  console.log(request.body);
  const id = uuidv4();
  videolist.push({
    channel: "Red Cow",
    image: "https://i.imgur.com/l2Xfgpl.jpg",
    id,
    title: request.body.videoTitle,
    description: request.body.videoDescription,
  });
  response.json({ note: "can not find it" });
});
app.listen(8080, () => {
  console.log(`🚀 server is running on 8080`);
});
