import { audioPlayer } from "./AudioPlayer.js";

import { soundsManifest } from "./manifests.js";
import { audioTrackManifest } from "./manifests.js";

function wait(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById("loader")?.addEventListener('click', () => {
    audioPlayer.init();
    audioPlayer.loadSounds(soundsManifest);
    audioPlayer.loadTracks(audioTrackManifest);
})

const playBtn = document.getElementById('play-btn')
if (!playBtn) {throw Error("playBtn could not be fetched!")};




playBtn.addEventListener('click', async () => {
    /* for (let i = 0; i < audioTrackManifest.length; i++) {
        console.log(audioTrackManifest[i].trackName);
        audioPlayer.playTrack(audioTrackManifest[i].trackName, 1)
        await wait(2000);
    } */
   audioPlayer.playTrack("healing", 1)
});
