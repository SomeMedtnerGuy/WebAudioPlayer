import { SoundT } from "./AudioPlayer";

var _ctx: AudioContext | null = null;
var _mixGain: GainNode | null = null;

function scheduleKick(ctx: AudioContext, mixGain: GainNode, sound: SoundT) {
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


document.getElementById("create-ctx-btn")?.addEventListener('click', () => {
    _ctx = new AudioContext();
    _mixGain = _ctx.createGain();
    _mixGain.connect(_ctx.destination);
})

document.getElementById('custom')?.addEventListener('click', async  () => {
    if (!_ctx || !_mixGain) {throw Error("context not initialized")}
    scheduleKick(_ctx, _mixGain, {
        frequency: 35,
        startTime: _ctx.currentTime,
        stopTime: _ctx.currentTime + 0.5
    })
});