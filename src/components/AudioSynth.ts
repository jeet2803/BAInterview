/**
 * Web Audio API synthesizer for premium UI game sounds
 * Lazily initialized to bypass browser autoplay security.
 */

class AudioSynth {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playCorrect() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Double-chime in standard major third chord
      this.playTone(523.25, 'sine', 0.1, now); // C5
      this.playTone(659.25, 'sine', 0.1, now + 0.08); // E5
      this.playTone(783.99, 'sine', 0.25, now + 0.16); // G5
    } catch (e) {
      console.warn('Audio play restricted:', e);
    }
  }

  playIncorrect() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Sad detuned descending buzzers
      this.playTone(220, 'triangle', 0.15, now); // A3
      this.playTone(207.65, 'triangle', 0.25, now + 0.12); // G#3
    } catch (e) {
      console.warn('Audio play restricted:', e);
    }
  }

  playClick() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Very brief high-pass click
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {
      // ignore
    }
  }

  playVictory() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Staccato triumph scales
      const notes = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
      notes.forEach((freq, idx) => {
        this.playTone(freq, 'sine', 0.1, now + idx * 0.07);
      });
    } catch (e) {
      // ignore
    }
  }

  playTimeWarning() {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      this.playTone(330, 'square', 0.05, now, 0.02); // brief heartbeat tick
    } catch (e) {
      // ignore
    }
  }

  private playTone(freq: number, type: 'sine' | 'square' | 'triangle', duration: number, time: number, maxGain: number = 0.1) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    gainNode.gain.setValueAtTime(maxGain, time);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gainNode);
    gainNode.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + duration + 0.05);
  }
}

export const synth = new AudioSynth();
