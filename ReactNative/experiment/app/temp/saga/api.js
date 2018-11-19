// export let api = {
//   fetchUser: id => 23,
//   fetchPet: id => 24,
// }

class Api {
  constructor() {
    this.users = new Map()
    this.users.set(23, { id: 23, name: 'Ball', petId: 123 })
    this.users.set(100, { id: 100, name: 'Song', petId: 200 })

    this.pets = new Map()
    this.pets.set(123, { name: 'db' })
    this.pets.set(200, { name: 'ax' })
  }

  fetchUser(userId) {
    return new Promise((resolve, reject) => {
      let user = this.users.get(userId)
      resolve(user)
    })
  }

  fetchPet(petId) {
    return new Promise((resolve, reject) => {
      let pet = this.pets.get(petId)
      resolve(pet)
    })
  }
}

export const api = new Api()