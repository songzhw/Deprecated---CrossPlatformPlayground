import SoundPlayer from "./SoundPlayer";

export default class SoundPlayerConsumer {
  private soundPlayer: SoundPlayer;

  constructor() {
    this.soundPlayer = new SoundPlayer();
  }

  public playSomethingCool() {
    const coolSoundFileName = "song.mp3";
    this.soundPlayer.playSoundFile(coolSoundFileName);
  }
}
