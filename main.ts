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
                    pitch: "D1",
                    startBeat: 1,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "D1",
                    startBeat: 2,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "D1",
                    startBeat: 3,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "D1",
                    startBeat: 4,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "D1",
                    startBeat: 5,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "D1",
                    startBeat: 6,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "D1",
                    startBeat: 7,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "D1",
                    startBeat: 8,
                    durationInBeats: 1
                },

                //Melody
                {
                    sound: "tone1",
                    pitch: "D2",
                    startBeat: 2,
                    durationInBeats: 0.5
                },
                {
                    sound: "tone1",
                    pitch: "F2",
                    startBeat: 3,
                    durationInBeats: 1
                },
                {
                    sound: "tone1",
                    pitch: "F2",
                    startBeat: 4,
                    durationInBeats: 0.5
                },
                {
                    sound: "tone1",
                    pitch: "D2",
                    startBeat: 4.5,
                    durationInBeats: 0.5
                },
                {
                    sound: "tone1",
                    pitch: "E2",
                    startBeat: 5,
                    durationInBeats: 0.5
                },
                {
                    sound: "tone1",
                    pitch: "C2",
                    startBeat: 5.5,
                    durationInBeats: 0.5
                },
                {
                    sound: "tone1",
                    pitch: "A1",
                    startBeat: 6.5,
                    durationInBeats: 1
                },
                {
                    sound: "tone1",
                    pitch: "A1",
                    startBeat: 7.5,
                    durationInBeats: 0.5
                },
                {
                    sound: "tone1",
                    pitch: "C2",
                    startBeat: 8,
                    durationInBeats: 0.5
                },
                {
                    sound: "tone1",
                    pitch: "D2",
                    startBeat: 8.5,
                    durationInBeats: 0.5
                },
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
    audioPlayer.playTrack("someKicks", 0.5);
});