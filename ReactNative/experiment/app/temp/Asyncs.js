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

export function fetchWithPromise_fail() {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      reject(new Error("failed 400"))
    }, 240)
  })
}
