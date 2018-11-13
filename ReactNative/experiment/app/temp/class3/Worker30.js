export default class Worker30 {
  constructor() {
    this.foo = 'bar'
  }

  workLambda = (id) => {
    console.log(`${id}`)
  }

  work(id) {
    this.workLambda(id)
  }
}