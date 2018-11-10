export function fetchWithCallback(id, callback) {
  setTimeout(() => {
    callback(id)
  }, 200)
}

export function fetchWithPromise(name) {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve(name)
    }, 240)
  })
}

