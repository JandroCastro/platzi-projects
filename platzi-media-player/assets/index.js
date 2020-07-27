import MediaPlayer from "./MediaPlayer.js";
import Autoplay from "./plugings/Autoplay";

const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer({ el: video, plugins: [] });

button.onclick = () => {
  player.togglePlay();
};
