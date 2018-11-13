export default class Worker10 {
  constructor() {
    this.foo = 'bar'
  }

  work(id) {
    console.log(`worker work(${id}, ${this.foo})`)
  }
}