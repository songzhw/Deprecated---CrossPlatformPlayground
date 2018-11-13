import Worker from './Worker10'

export default class Consumer10 {
  constructor() {
    this.worker = new Worker()
  }

  workOn(id) {
    this.worker.work(id)
  }
}


