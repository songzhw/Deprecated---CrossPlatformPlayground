import Worker from './Worker30'

export default class Consumer20 {
  constructor() {
    this.worker = new Worker()
  }

  workLambdaOn(id){
    this.worker.work(id)
  }

}


