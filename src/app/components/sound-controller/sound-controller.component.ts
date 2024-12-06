import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-sound-controller',
  imports: [
    MatSliderModule
  ],
  templateUrl: './sound-controller.component.html',
  styleUrls: ['./sound-controller.component.css']
})
export class SoundControllerComponent implements OnInit, OnDestroy {
  private audioContext: AudioContext;
  private analyser: AnalyserNode;
  private microphone!: MediaStreamAudioSourceNode;
  private analyserData: Uint8Array;
  public volume: number = 0;

  constructor() {
    this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 256;
    this.analyserData = new Uint8Array(this.analyser.frequencyBinCount);
  }

  ngOnInit() {
    this.startMicrophone();
  }

  ngOnDestroy() {
    if (this.microphone) {
      this.microphone.disconnect();
    }
  }

  async startMicrophone() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.microphone = this.audioContext.createMediaStreamSource(stream);
      this.microphone.connect(this.analyser);

      this.monitorVolume();
    } catch (err) {
      console.error('Erreur d\'accès au microphone:', err);
    }
  }

  private monitorVolume() {
    const updateVolume = () => {
      this.analyser.getByteFrequencyData(this.analyserData);
      this.volume = this.calculateVolume(this.analyserData);

      requestAnimationFrame(updateVolume);
    };

    updateVolume();
  }

  private calculateVolume(data: Uint8Array): number {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return (sum / data.length) / 4;
  }
}