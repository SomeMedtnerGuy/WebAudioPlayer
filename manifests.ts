import type { AudioTrackManifestT, SoundsManifestT } from "./AudioPlayer.ts";
import { decreasing, falling, increasing, kick, rising, sine, tone1, triangle, hollow, explosion } from "./sounds.js";

export const soundsManifest: SoundsManifestT = [
    {
        soundName: "hollow",
        soundScheduler: hollow
    },
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
    },
    {
        soundName: "decreasing",
        soundScheduler: decreasing
    },
    {
        soundName: "sine",
        soundScheduler: sine
    },
    {
        soundName: "triangle",
        soundScheduler: triangle
    },
    {
        soundName: "explosion",
        soundScheduler: explosion
    }
]

export const audioTrackManifest: AudioTrackManifestT = [
    {
        trackName: "start",
        track: {
            tempoBPM: 60,
            maxIndividualGain: 0.8,
            notes: [
                {
                    sound: "triangle",
                    pitch: "D5",
                    startBeat: 1,
                    durationInBeats: 0.6
                },
                {
                    sound: "triangle",
                    pitch: "D5",
                    startBeat: 2,
                    durationInBeats: 0.6
                },
                {
                    sound: "triangle",
                    pitch: "D5",
                    startBeat: 3,
                    durationInBeats: 0.6
                },
                {
                    sound: "triangle",
                    pitch: "D6",
                    startBeat: 4,
                    durationInBeats: 1
                },
            ]
        }
    },
    {
        trackName: "spawn",
        track: {
            tempoBPM: 150,
            maxIndividualGain: 0.7,
            notes: [
                {
                    sound: "increasing",
                    pitch: "B3",
                    startBeat: 1,
                    durationInBeats: 1
                }
            ]
        }
    },
    {
        trackName: "paddleHit",
        track: {
            tempoBPM: 400,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "hollow",
                    pitch: "F5",
                    startBeat: 1,
                    durationInBeats: 1
                }
            ]
        }
    },
    {
        trackName: "wallHit",
        track: {
            tempoBPM: 400,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "hollow",
                    pitch: "D7",
                    startBeat: 1,
                    durationInBeats: 1
                }
            ]
        }
    },
    {
        trackName: "damageHit",
        track: {
            tempoBPM: 180,
            maxIndividualGain: 0.7,
            notes: [
                {
                    sound: "falling",
                    pitch: "D2",
                    startBeat: 1,
                    durationInBeats: 1
                }
            ]
        }
    },
    {
        trackName: "faster",
        track: {
            tempoBPM: 400,
            maxIndividualGain: 0.8,
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
        trackName: "slower",
        track: {
            tempoBPM: 400,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "falling",
                    pitch: "D4",
                    startBeat: 1,
                    durationInBeats: 1
                },
                {
                    sound: "falling",
                    pitch: "D4",
                    startBeat: 2,
                    durationInBeats: 1
                },
                {
                    sound: "falling",
                    pitch: "D4",
                    startBeat: 3,
                    durationInBeats: 1
                },
            ]
        }
    },
    {
        trackName: "longer",
        track: {
            tempoBPM: 240,
            maxIndividualGain: 0.8,
            notes: [
                {
                    sound: "tone1",
                    pitch: "C6",
                    startBeat: 1,
                    durationInBeats: 0.7
                },
                {
                    sound: "tone1",
                    pitch: "F6",
                    startBeat: 2,
                    durationInBeats: 1.5
                }
            ]
        }
    },
    {
        trackName: "shorter",
        track: {
            tempoBPM: 180,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "triangle",
                    pitch: "C3",
                    startBeat: 1,
                    durationInBeats: 0.7
                },
                {
                    sound: "tone1",
                    pitch: "F#2",
                    startBeat: 2,
                    durationInBeats: 1.5
                }
            ]
        }
    },
    {
        trackName: "skull",
        track: {
            tempoBPM: 120,
            maxIndividualGain: 1/6,
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
        trackName: "bomb",
        track: {
            tempoBPM: 45,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "explosion",
                    pitch: "E0",
                    startBeat: 1,
                    durationInBeats: 1
                }
            ]
        }
    },
    {
        trackName: "healing",
        track: {
            tempoBPM: 60,
            maxIndividualGain: 0.3,
            notes: [
                {
                    sound: "sine",
                    pitch: "C#5",
                    startBeat: 1, 
                    durationInBeats: 1
                },
                {
                    sound: "sine",
                    pitch: "F5",
                    startBeat: 1, 
                    durationInBeats: 1
                },
                {
                    sound: "sine",
                    pitch: "A5",
                    startBeat: 1, 
                    durationInBeats: 1
                },
            ]
        }
    },
    {
        trackName: "noHealth",
        track: {
            tempoBPM: 180,
            maxIndividualGain: 1,
            notes: [
                {
                    sound: "falling",
                    pitch: "G#4",
                    startBeat: 1,
                    durationInBeats: 5
                },
                {
                    sound: "explosion",
                    pitch: "E0",
                    startBeat: 6,
                    durationInBeats: 6
                }
            ]
        }
    }
]