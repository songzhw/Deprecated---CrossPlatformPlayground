import Worker from './Worker10'

export default class Consumer10 {
  constructor() {
    this.worker = new Worker()
  }

  workOn() {
    let id = 23
    this.worker.work(id)
  }
}


