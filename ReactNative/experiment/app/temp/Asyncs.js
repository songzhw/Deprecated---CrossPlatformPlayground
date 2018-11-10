const fetchWithCallback = function (id, callback) {
  setTimeout(() => {
    callback(id)
  }, 3000)
}

export default fetchWithCallback