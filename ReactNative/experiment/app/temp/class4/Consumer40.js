import Worker from './Worker40'

export default class Consumer40 {
  constructor() {
    this.worker = new Worker()
  }

  workOn(id) {
    this.worker.work(id)
  }

}


