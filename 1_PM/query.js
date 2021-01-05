const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.
const usersByPet = pet => {
  const newList = []

  database.users.forEach(element => {

    if (element.favPet === pet){
      newList.push(element.firstName)
    }
  })

  return newList
}

console.log(usersByPet('dog'))
console.log(usersByPet('cat'))

// Implement the function collegeLookup to return the name and color of a user's college.
const collegeLookup = user => {
  collegeid = ""
  database.users.forEach(element => {
    if (element.firstName == user){
      collegeid = element.collegeId
    }
  })
  variable = ""
  database.college.forEach(element => {
    if (element.id === collegeid){
      variable = [element.name, element.color]
    }
  })
  return variable
}

console.log(collegeLookup('Charles'))
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.
const oppositesAttract = []

const make_opp = () => {
  for (i=0; i < database.users.length - 1; i++){
    for (j=1; j < database.users.length; j++){
      if (database.users[i].favPet === database.users[j].favPet){
        oppositesAttract.push([database.users[i], database.users[j]])
        console.log(oppositesAttract)
      }
    }
  }
}

make_opp()

console.log(oppositesAttract)

// define local as a list of users who live in the same state as they go to school.
const local = []

const make_local = () => {
  database.users.forEach(user => {
    [cname, color] = collegeLookup(user.firstName)
    database.college.forEach(element => {
      if (element.name === cname){
        if (user.state === element.state){
          local.push(user.firstName)
        }
      }
    })
  })
}

make_local()

console.log(local)

// define collegeFriends as a list of friend objects that go to the same college
const collegeFriends = []

const find_friends = () => {
  database.college.forEach(el => {
    const same = []
    database.users.forEach(per => {
      if (el.id === per.collegeId){
        same.push(per.firstName)
      }
    })
    collegeFriends.push(same)
  })
}

find_friends()

console.log(collegeFriends)
