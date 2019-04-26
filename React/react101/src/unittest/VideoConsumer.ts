import VidoPlayer from "./VideoPlayer";

export default class AudioConsumer {
  private player: VidoPlayer;

  constructor() {
    this.player = new VidoPlayer();
  }

  public playVideo() {
    this.player.play("movie.mp4");
  }
}
