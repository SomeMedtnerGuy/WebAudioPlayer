import type { AudioTrackManifestT, SoundsManifestT } from "./AudioPlayer";

import { kick, tone1 } from "./sounds.js";
import { audioPlayer } from "./AudioPlayer.js";




const soundsManifest: SoundsManifestT = [
    {
        soundName: "kick",
        soundScheduler: kick
    },
    {
        soundName: "tone1",
        soundScheduler: tone1
    }
]

const audioTrackManifest: AudioTrackManifestT = [
    {
        trackName: "someKicks",
        track: {
            tempoBPM: 120,
            notes: [
                {
                    sound: "kick",
                    pitch: "E1",
                    startBeat: 1,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "E1",
                    startBeat: 2,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "E1",
                    startBeat: 3,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "E1",
                    startBeat: 4,
                    durationInBeats: 1
                },
                {
                    sound: "tone1",
                    pitch: "B2",
                    startBeat: 1,
                    durationInBeats: 3
                }
            ]
        }
    }
]

document.getElementById("loader")?.addEventListener('click', () => {
    audioPlayer.init();
    audioPlayer.loadSounds(soundsManifest);
    audioPlayer.loadTracks(audioTrackManifest);
})

const playBtn = document.getElementById('play-btn')
if (!playBtn) {throw Error("playBtn could not be fetched!")};

playBtn.addEventListener('click', () => {
    audioPlayer.playTrack("someKicks", 1);
});