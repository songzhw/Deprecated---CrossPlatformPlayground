import Worker from './Worker50'

export default class Consumer50 {
  constructor() {
    this.worker = new Worker()
  }

  workOn(id) {
    this.worker.work(id)
  }

}


