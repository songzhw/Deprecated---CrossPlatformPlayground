export default class Worker20 {
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