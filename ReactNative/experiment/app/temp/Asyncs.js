export function fetchWithCallback(id, callback) {
  setTimeout(() => {
    callback(id)
  }, 2000)
}

export function fetchWithPromise() {
  return 23
}

