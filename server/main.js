import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";
import express, { request, response } from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/videos", async (request, response) => {
  let videolist = await fs.readFile("./videolist.json");
  videolist = JSON.parse(videolist);
  response.json(videolist);
});

app.get("/videos/:id", async (request, response) => {
  console.log(request.params);
  let videolist = await fs.readFile("./videolist.json");
  videolist = JSON.parse(videolist);
  const video = videolist.find((video) => video.id === request.params.id);
  if (video) {
    response.json(video);
  } else {
    response.status(400).json({ message: "Can't find video" });
  }
});
app.post("/videos", async (request, response) => {
  let videolist = await fs.readFile("./videolist.json");
  videolist = JSON.parse(videolist);
  console.log(request.body);
  const id = uuidv4();
  const video = {
    channel: "Red Cow",
    image: "https://i.imgur.com/l2Xfgpl.jpg",
    id,
    title: request.body.videoTitle,
    description: request.body.videoDescription,
    comments: [],
  };
  videolist.push(video);
  await fs.writeFile("./videolist.json", JSON.stringify(videolist));
  response.json({ id });
});
app.listen(8080, () => {
  console.log(`🚀 server is running on 8080`);
});
