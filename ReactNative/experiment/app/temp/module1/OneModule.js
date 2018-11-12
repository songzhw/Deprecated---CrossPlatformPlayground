const Worker = {
  fetchUser() {
    return new Promise((resolve, reject) => {
      resolve({id: 23, name: 'szw'})
    })
  }
}

export default Worker