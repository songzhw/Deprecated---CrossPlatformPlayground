type Listener = (id: number) => void;

export class EmitChannelManager {
  listener: Listener;

  registerListener(l: Listener) {
    this.listener = l;
  }

  unregisterLister() {
    this.listener = null;
  }

  work(id: number) {
    if (this.listener) {
      this.listener(id);
    }
  }
}
