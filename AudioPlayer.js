class AudioPlayer {
    constructor() {
        this._ctx = null;
        this._mixGain = null;
    }
    //This stuff needs to be in an init because the object, since it is a singleton,
    // is constructed on page load and if a new AudioContext() is called there,
    // the browser complains that a sound was attemped to be played on load, which is a no-no
    init() {
        this._ctx = new AudioContext();
        this._mixGain = this.ctx.createGain();
        this.mixGain.connect(this._ctx.destination);
    }
    get ctx() {
        if (!this._ctx) {
            throw Error("Audio context not initialized!");
        }
        ;
        return this._ctx;
    }
    get mixGain() {
        if (!this._mixGain) {
            throw Error("mixGain not initialized!");
        }
        ;
        return this._mixGain;
    }
}
export {};
/* class AudioPlayer {

    loadSounds(sounds: any) {

    }

    loadAudioManifest(audioManifest: AudioManifestT) {
        this._audioManifest = audioManifest;
    }

    playAudio(audioName: string, speed: number) {
        const audioInfo = this.audioManifest.find(audioToFind => audioToFind.audioName === audioName);
        if (!audioInfo) {throw Error("This audio does not exist in the manifest!")}

        const audio = audioInfo.audioTrack;
        const startAudioTime = this._ctx.currentTime;
        const sounds: SoundT[] = audio.notes.map(note => {
            const beatDuration = 60 / audio.tempoBPM
            return {
                frequency: note.frequency,
                startTime: startAudioTime + (note.startBeat - 1) * beatDuration * speed,
                duration: note.durationBeats * beatDuration * speed
            }
        })
        
        sounds.forEach(sound => this._scheduleSound(sound))
    }

    private _scheduleSound(sound: SoundT) {
        const oscillator = this._ctx.createOscillator();
        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(sound.frequency, sound.startTime);
        oscillator.connect(this._ctx.destination);
        oscillator.start(sound.startTime);
        oscillator.stop(sound.startTime + sound.duration)
    }

    private _ctx: AudioContext = new AudioContext();

    private _audioManifest: AudioManifestT | null = null;
    get audioManifest() {
        if (!this._audioManifest) {throw Error("Audio manifest was not loaded!")}
        return this._audioManifest;
    }


    scheduleKick(ctx: AudioContext, sound: SoundT) {
        const osc = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainOsc = ctx.createGain();
        const gainOsc2 = ctx.createGain();

        osc.type = "triangle";
        osc2.type = "sine";
        osc.frequency.value = sound.frequency;
        osc2.frequency.value = sound.frequency * 2;

        o

    }

}

export const audioPlayer = new AudioPlayer() */ 
