var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
var _ctx = null;
var _mixGain = null;
function scheduleKick(ctx, mixGain, sound) {
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
(_a = document.getElementById("create-ctx-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    _ctx = new AudioContext();
    _mixGain = _ctx.createGain();
    _mixGain.connect(_ctx.destination);
});
(_b = document.getElementById('custom')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    if (!_ctx || !_mixGain) {
        throw Error("context not initialized");
    }
    scheduleKick(_ctx, _mixGain, {
        frequency: 35,
        startTime: _ctx.currentTime,
        stopTime: _ctx.currentTime + 0.5
    });
}));
export {};
