export default class Worker40 {
  constructor() {
    this.foo = 'bar'
  }

  work(id) {
    console.log(`work(${id}, ${this.foo})`)
  }

}