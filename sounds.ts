import type { SoundT } from "./AudioPlayer.ts"

export function kick(ctx: AudioContext, mixGain: GainNode, sound: SoundT) {
    const osc = ctx.createOscillator();
    const gainOsc = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(sound.frequency * 2.5, sound.startTime);
    osc.frequency.exponentialRampToValueAtTime(0.01, sound.stopTime);
    gainOsc.gain.setValueAtTime(1, sound.startTime);
    gainOsc.gain.exponentialRampToValueAtTime(0.01, sound.stopTime);
    osc.connect(gainOsc);
    gainOsc.connect(mixGain);

    const osc2 = ctx.createOscillator();
    const gainOsc2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(sound.frequency, sound.startTime);
    gainOsc2.gain.setValueAtTime(1, sound.startTime);
    gainOsc2.gain.exponentialRampToValueAtTime(0.01, sound.stopTime);
    osc2.connect(gainOsc2);
    gainOsc2.connect(mixGain);

    osc.start(sound.startTime);
    osc.stop(sound.stopTime);
    osc2.start(sound.startTime);
    osc2.stop(sound.stopTime);
}

export function tone1(ctx: AudioContext, mixGain: GainNode, sound: SoundT) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(sound.frequency, sound.startTime);
    const envelope = createEnvelope(ctx, sound.startTime, sound.stopTime);
    osc.connect(envelope).connect(mixGain);

    const osc2 = ctx.createOscillator();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(sound.frequency * 2, sound.startTime);
    const envelope2 = createEnvelope(ctx, sound.startTime, sound.stopTime);
    osc2.connect(envelope2).connect(mixGain);

    osc.start(sound.startTime);
    osc.stop(sound.stopTime);
    osc2.start(sound.startTime);
    osc2.stop(sound.stopTime);
}

export function rising(ctx: AudioContext, mixGain: GainNode, sound: SoundT) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(sound.frequency, sound.startTime);
    osc.frequency.linearRampToValueAtTime(sound.frequency * 8, sound.stopTime);

    const envelope = createEnvelope(ctx, sound.startTime, sound.stopTime);
    osc.connect(envelope).connect(mixGain);
    osc.start(sound.startTime);
    osc.stop(sound.stopTime);
}

export function falling(ctx: AudioContext, mixGain: GainNode, sound: SoundT) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(sound.frequency, sound.startTime);
    osc.frequency.linearRampToValueAtTime(sound.frequency / 8, sound.stopTime);

    const envelope = createEnvelope(ctx, sound.startTime, sound.stopTime)
    osc.connect(envelope).connect(mixGain);
    osc.start(sound.startTime);
    osc.stop(sound.stopTime);
}

export function increasing(ctx: AudioContext, mixGain: GainNode, sound: SoundT) {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(sound.frequency, sound.startTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, sound.startTime);
    gain.gain.linearRampToValueAtTime(sound.maxGain, sound.stopTime); //todo this should go outside

    const envelope = createEnvelope(ctx, sound.startTime, sound.stopTime);
    osc.connect(gain).connect(envelope).connect(mixGain);
    osc.start(sound.startTime);
    osc.stop(sound.stopTime)
}



function createEnvelope(ctx: AudioContext, startTime: number, stopTime: number) {
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(1, startTime + 0.05);
    gain.gain.setValueAtTime(1, stopTime - 0.1)
    gain.gain.exponentialRampToValueAtTime(0.001, stopTime - 0.01)
    return gain
}