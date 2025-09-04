class AudioPlayer {
    constructor() {
        this._ctx = null;
        this._mixGain = null;
        this._soundsMap = new Map();
        this._trackMap = new Map();
    }
    //This stuff needs to be in an init because the object, since it is a singleton,
    // is constructed on page load and if a new AudioContext() is called there,
    // the browser complains that a sound was attemped to be played on load, which is a no-no
    init() {
        this._ctx = new AudioContext();
        this._mixGain = this.ctx.createGain();
        this.mixGain.connect(this._ctx.destination);
    }
    loadSounds(soundsManifest) {
        soundsManifest.forEach(sound => {
            this._soundsMap.set(sound.soundName, sound.soundScheduler);
        });
    }
    loadTracks(audioTrackManifest) {
        audioTrackManifest.forEach(track => {
            this._trackMap.set(track.trackName, track.track);
        });
    }
    playTrack(trackName, speed) {
        const track = this._trackMap.get(trackName);
        if (!track) {
            throw Error("This track does not exist");
        }
        ;
        const now = this.ctx.currentTime;
        const beatDuration = 60 / track.tempoBPM;
        const sounds = track.notes.map(note => {
            const startTime = now + (note.startBeat - 1) * beatDuration * speed;
            return {
                soundName: note.sound,
                frequency: note.frequency,
                startTime: startTime,
                stopTime: startTime + (note.durationInBeats * beatDuration * speed)
            };
        });
        sounds.forEach(sound => this.scheduleSound(sound));
    }
    scheduleSound(sound) {
        const makeSound = this._soundsMap.get(sound.soundName);
        if (!makeSound) {
            throw Error("This sound scheduler does not exist!");
        }
        makeSound(this.ctx, this.mixGain, sound);
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
export const audioPlayer = new AudioPlayer();
