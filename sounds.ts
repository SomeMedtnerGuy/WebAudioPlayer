import type { SoundT } from "./AudioPlayer"

export function kick(ctx: AudioContext, output: GainNode, sound: SoundT) {
    const osc = ctx.createOscillator();
    const gainOsc = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(sound.frequency * 2.5, sound.startTime);
    osc.frequency.exponentialRampToValueAtTime(0.01, sound.stopTime);
    gainOsc.gain.setValueAtTime(1, sound.startTime);
    gainOsc.gain.exponentialRampToValueAtTime(0.01, sound.stopTime);
    osc.connect(gainOsc);
    gainOsc.connect(output);

    const osc2 = ctx.createOscillator();
    const gainOsc2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(sound.frequency, sound.startTime);
    gainOsc2.gain.setValueAtTime(1, sound.startTime);
    gainOsc2.gain.exponentialRampToValueAtTime(0.01, sound.stopTime);
    osc2.connect(gainOsc2);
    gainOsc2.connect(output);

    osc.start(sound.startTime);
    osc.stop(sound.stopTime);
    osc2.start(sound.startTime);
    osc2.stop(sound.stopTime);
}

export function tone1(ctx: AudioContext, output: GainNode, sound: SoundT) {
    const osc = ctx.createOscillator();
    const gainOsc = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(sound.frequency, sound.startTime);
    gainOsc.gain.setValueAtTime(0.001, sound.startTime);
    gainOsc.gain.exponentialRampToValueAtTime(0.9, sound.startTime + 0.01);
    gainOsc.gain.setValueAtTime(0.9, sound.stopTime - 0.1)
    gainOsc.gain.exponentialRampToValueAtTime(0.001, sound.stopTime - 0.05)
    osc.connect(gainOsc);
    gainOsc.connect(output);

    const osc2 = ctx.createOscillator();
    const gainOsc2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(sound.frequency * 2, sound.startTime);
    gainOsc2.gain.setValueAtTime(0.001, sound.startTime);
    gainOsc2.gain.exponentialRampToValueAtTime(0.7, sound.startTime + 0.01); //TODO: Change these to relative times to the duration!
    gainOsc2.gain.setValueAtTime(0.7, sound.stopTime - 0.1)
    gainOsc2.gain.exponentialRampToValueAtTime(0.001, sound.stopTime - 0.01)
    osc2.connect(gainOsc2);
    gainOsc2.connect(output);

    osc.start(sound.startTime);
    osc.stop(sound.stopTime);
    osc2.start(sound.startTime);
    osc2.stop(sound.stopTime);
}

export function rising(ctx: AudioContext, output: GainNode, sound: SoundT) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(sound.frequency, sound.startTime);
    osc.frequency.linearRampToValueAtTime(sound.frequency * 8, sound.stopTime);
    osc.connect(output);
    osc.start(sound.startTime);
    osc.stop(sound.stopTime);
}

export function falling(ctx: AudioContext, output: GainNode, sound: SoundT) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(sound.frequency, sound.startTime);
    osc.frequency.linearRampToValueAtTime(sound.frequency / 8, sound.stopTime);
    osc.connect(output);
    osc.start(sound.startTime);
    osc.stop(sound.stopTime);
}

export function increasing(ctx: AudioContext, output: GainNode, sound: SoundT) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(sound.frequency, sound.startTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, sound.startTime);
    gain.gain.linearRampToValueAtTime(1 / 7, sound.stopTime);

    osc.connect(gain);
    gain.connect(output);
    osc.start(sound.startTime);
    osc.stop(sound.stopTime)
}