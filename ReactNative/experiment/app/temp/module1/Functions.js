import Worker from './OneModule'

export function getUserName() {
  return Worker.fetchUser()
    .then(resp => resp.name)
}

export function forEachIn(items, callback) {
  let length = items.length
  for (let i = 0; i < length; i++) {
    callback(items[i])
  }
}
