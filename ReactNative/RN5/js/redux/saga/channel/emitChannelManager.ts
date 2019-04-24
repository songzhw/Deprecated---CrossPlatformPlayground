type Listener = (id: number) => void;

var listener: Listener;

const registerListener = (l: Listener) => {
  listener = l;
};

const unregisterLister = () => {
  listener = null;
};

const work = (id: number) => {
  if (this.listener) {
    listener(id);
  }
};

export default { listener, registerListener, unregisterLister, work };
