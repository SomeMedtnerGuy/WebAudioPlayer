type NoteT = {
    sound: string,
    frequency: number,
    startBeat: number,
    durationInBeats: number
}

export type SoundT = {
    soundName: string
    frequency: number,
    startTime: number,
    stopTime: number
}

type AudioTrackT = {
    tempoBPM: number
    notes: NoteT[]
}

export type AudioTrackManifestT = {
    trackName: string,
    track: AudioTrackT
}[]

type SoundSchedulerT = (ctx: AudioContext, mixGain: GainNode, sound: SoundT) => void

export type SoundsManifestT = {
    soundName: string,
    soundScheduler: SoundSchedulerT
}[]

class AudioPlayer {
    //This stuff needs to be in an init because the object, since it is a singleton,
    // is constructed on page load and if a new AudioContext() is called there,
    // the browser complains that a sound was attemped to be played on load, which is a no-no
    init() {
        this._ctx = new AudioContext();
        this._mixGain = this.ctx.createGain();
        this.mixGain.connect(this._ctx.destination);
    }

    loadSounds(soundsManifest: SoundsManifestT) {
        soundsManifest.forEach(sound => {
            this._soundsMap.set(sound.soundName, sound.soundScheduler);
        })
    }

    loadTracks(audioTrackManifest: AudioTrackManifestT) {
        audioTrackManifest.forEach(track => {
            this._trackMap.set(track.trackName, track.track);
        })
    }

    playTrack(trackName: string, speed: number) {
        const track = this._trackMap.get(trackName);
        if (!track) {throw Error("This track does not exist")};

        const now = this.ctx.currentTime
        const beatDuration = 60 / track.tempoBPM;

        const sounds: SoundT[] = track.notes.map(note => {
            const startTime = now + (note.startBeat - 1) * beatDuration * speed;
            return {
                soundName: note.sound,
                frequency: note.frequency,
                startTime: startTime,
                stopTime: startTime + (note.durationInBeats * beatDuration * speed)
            }
        })
        sounds.forEach(sound => this.scheduleSound(sound))
    }

    scheduleSound(sound: SoundT) {
        const makeSound = this._soundsMap.get(sound.soundName);
        if (!makeSound) {throw Error("This sound scheduler does not exist!")}

        makeSound(this.ctx, this.mixGain, sound);
    }


    

    private _ctx: AudioContext | null = null;
    get ctx() {
        if (!this._ctx) {throw Error("Audio context not initialized!")};
        return this._ctx;
    }
    private _mixGain: GainNode | null = null;
    get mixGain() {
        if (!this._mixGain) {throw Error("mixGain not initialized!")};
        return this._mixGain;
    }

    private _soundsMap = new Map<string, SoundSchedulerT>();
    private _trackMap = new Map<string, AudioTrackT>();
}

export const audioPlayer = new AudioPlayer()