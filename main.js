var _a;
import { audioPlayer } from "./AudioPlayer.js";
/* var _ctx: AudioContext = new AudioContext();
var _mixGain: GainNode = _ctx.createGain();
_mixGain.connect(_ctx.destination); */
function kick(ctx, mixGain, sound) {
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainOsc = ctx.createGain();
    const gainOsc2 = ctx.createGain();
    osc.type = "triangle";
    osc2.type = "sine";
    gainOsc.gain.setValueAtTime(1, sound.startTime);
    gainOsc.gain.exponentialRampToValueAtTime(0.001, sound.stopTime);
    gainOsc2.gain.setValueAtTime(1, sound.startTime);
    gainOsc2.gain.exponentialRampToValueAtTime(0.001, sound.stopTime);
    osc.frequency.setValueAtTime(sound.frequency * 2.5, sound.startTime);
    osc.frequency.exponentialRampToValueAtTime(0.001, sound.stopTime);
    osc2.frequency.setValueAtTime(sound.frequency, sound.startTime);
    osc.connect(gainOsc);
    osc2.connect(gainOsc2);
    gainOsc.connect(mixGain);
    gainOsc2.connect(mixGain);
    osc.start(sound.startTime);
    osc2.start(sound.startTime);
    osc.stop(sound.stopTime);
    osc2.stop(sound.stopTime);
}
const soundsManifest = [
    {
        soundName: "kick",
        soundScheduler: kick
    }
];
const audioTrackManifest = [
    {
        trackName: "someKicks",
        track: {
            tempoBPM: 120,
            notes: [
                {
                    sound: "kick",
                    frequency: 40,
                    startBeat: 1,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    frequency: 40,
                    startBeat: 2,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    frequency: 40,
                    startBeat: 3,
                    durationInBeats: 1
                },
                {
                    sound: "kick",
                    frequency: 40,
                    startBeat: 4,
                    durationInBeats: 1
                },
            ]
        }
    }
];
(_a = document.getElementById("loader")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    audioPlayer.init();
    audioPlayer.loadSounds(soundsManifest);
    audioPlayer.loadTracks(audioTrackManifest);
});
const playBtn = document.getElementById('play-btn');
if (!playBtn) {
    throw Error("playBtn could not be fetched!");
}
;
playBtn.addEventListener('click', () => {
    audioPlayer.playTrack("someKicks", 1);
    console.log("called");
    /* kick(_ctx, _mixGain, {
        soundName: "kick",
        frequency: 40,
        startTime: _ctx?.currentTime,
        stopTime: _ctx?.currentTime + 0.5
    }) */
});
