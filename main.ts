import type { AudioTrackManifestT, SoundsManifestT } from "./AudioPlayer.ts";

import { falling, increasing, kick, rising, tone1 } from "./sounds.js";
import { audioPlayer } from "./AudioPlayer.js";




const soundsManifest: SoundsManifestT = [
    {
        soundName: "kick",
        soundScheduler: kick
    },
    {
        soundName: "tone1",
        soundScheduler: tone1
    },
    {
        soundName: "rising",
        soundScheduler: rising
    },
    {
        soundName: "falling",
        soundScheduler: falling
    },
    {
        soundName: "increasing",
        soundScheduler: increasing
    }
]

const audioTrackManifest: AudioTrackManifestT = [
    {
        trackName: "someKicks",
        track: {
            tempoBPM: 150,
            maxIndividualGain: 1,
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
                    pitch: "A1",
                    startBeat: 5,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "A1",
                    startBeat: 6,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "A1",
                    startBeat: 7,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    pitch: "A1",
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
    },
    {
        trackName: "upgrade",
        
        track: {
            tempoBPM: 400,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "rising",
                    pitch: "A3",
                    startBeat: 1,
                    durationInBeats: 1
                },
                {
                    sound: "rising",
                    pitch: "A3",
                    startBeat: 2,
                    durationInBeats: 1
                },
                {
                    sound: "rising",
                    pitch: "A3",
                    startBeat: 3,
                    durationInBeats: 1
                },
            ]
        }
    },
    {
        trackName: "downgrade",
        
        track: {
            tempoBPM: 400,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "falling",
                    pitch: "A3",
                    startBeat: 1,
                    durationInBeats: 1
                },
                {
                    sound: "falling",
                    pitch: "A3",
                    startBeat: 2,
                    durationInBeats: 1
                },
                {
                    sound: "falling",
                    pitch: "A3",
                    startBeat: 3,
                    durationInBeats: 1
                },
            ]
        }
    },
    {
        trackName: "mystery",
        
        track: {
            tempoBPM: 120,
            maxIndividualGain: 1/7,
            notes: [
                {
                    sound: "increasing",
                    pitch: "C2",
                    startBeat: 1,
                    durationInBeats: 4
                },
                {
                    sound: "increasing",
                    pitch: "G2",
                    startBeat: 1,
                    durationInBeats: 4
                },
                {
                    sound: "increasing",
                    pitch: "E3",
                    startBeat: 1,
                    durationInBeats: 4
                },
                {
                    sound: "increasing",
                    pitch: "Bb3",
                    startBeat: 1,
                    durationInBeats: 4
                },
                {
                    sound: "increasing",
                    pitch: "D4",
                    startBeat: 1,
                    durationInBeats: 4
                },
                {
                    sound: "increasing",
                    pitch: "F#4",
                    startBeat: 1,
                    durationInBeats: 4
                },
                {
                    sound: "increasing",
                    pitch: "A4",
                    startBeat: 1,
                    durationInBeats: 4
                },
            ]
        }
    },
    {
        trackName: "testRising",
        
        track: {
            tempoBPM: 60,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "rising",
                    pitch: "E1",
                    startBeat: 1,
                    durationInBeats: 10
                }
            ]
        }
    },
    {
        trackName: "testFalling",
        
        track: {
            tempoBPM: 60,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "falling",
                    pitch: "E6",
                    startBeat: 1,
                    durationInBeats: 10
                }
            ]
        }
    },
    {
        trackName: "testIncreasing",
        
        track: {
            tempoBPM: 60,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "increasing",
                    pitch: "E1",
                    startBeat: 1,
                    durationInBeats: 10
                }
            ]
        }
    },

]

document.getElementById("loader")?.addEventListener('click', () => {
    audioPlayer.init();
    audioPlayer.loadSounds(soundsManifest);
    audioPlayer.loadTracks(audioTrackManifest);
})

const playBtn = document.getElementById('play-btn')
if (!playBtn) {throw Error("playBtn could not be fetched!")};

playBtn.addEventListener('click', () => {
    //audioPlayer.playTrack("upgrade", 1);
    audioPlayer.playTrack("mystery", 1);
    //audioPlayer.playTrack("testFalling", 1)
});

//TODO: somehow I have to adapt the mixGain to account for the ammount of oscilators at any given time :(