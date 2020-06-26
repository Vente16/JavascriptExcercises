// Exmple 1
export function getCompanies(companies) {
  console.log('Emxmple 1');
  if (companies.length > 0) {
    companies.map( (companie) => {
      companie.name = firstChapterUppercase(companie.name );
      companie.users.map( (user) => {
        user.firstName = (user.firstName === undefined)? '': firstChapterUppercase(user.firstName);
        user.lastName = (user.lastName === undefined)? '': firstChapterUppercase(user.lastName);
      });
      companie.users = companie.users.sort((a, b) => {
        const namea = a.firstName.toUpperCase();
        const nameb = b.firstName.toUpperCase();
        return (namea < nameb) ? -1 : (namea > nameb) ? 1 : 0;
      });
    });
    companies = companies.sort((a, b) => a.usersLength - b.usersLength).reverse();
    console.log(companies);
  }
}

function firstChapterUppercase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Exmple 2
export function filterCars(hasCar, companies) {
  if (typeof hasCar === 'boolean') {
    companies.map( (companie) => {
      let usersWithHasCar = 0;
      companie.users.map( (user) => {
        if (user.car === hasCar) {
          usersWithHasCar++;
        }
      });
      companie.usersLength = usersWithHasCar;
    });
  }
  console.log('Example 2');
  console.log(companies);
}

// Exmple 4
export function agroupUsersByCompenies(companies) {
  if (companies.length > 0) {
    let usersData = [];
    companies.map( (companie) => {
      companie.users.map( (user) => {
        user.company = companie.name;
        usersData.push(user);
      });
    });
    usersData = usersData.sort((a, b) => a.age - b.age).reverse();
    return usersData;
  }
}

// Example 5
export function averageUsers(users) {
  console.log('Usuarios: ', users);
  if (users.length > 0) {
    let ageUsers = 0;
    let usersWithCar = 0;
    let ageUsersWithCar = 0;
    users.map( (user) => {
      ageUsers+= user.age;
      usersWithCar = (user.car) ? usersWithCar + 1: usersWithCar;
      ageUsersWithCar = (user.car) ? ageUsersWithCar + user.age: ageUsersWithCar;
    });
    const totalUsers = users.length;
    const averageByUsers = parseFloat((ageUsers / totalUsers ).toFixed(2));
    const averageAgeUserWithCar = parseFloat( (ageUsersWithCar / usersWithCar ).toFixed(2));
    const data = {
      size: totalUsers,
      average: averageByUsers,
      hasCar: usersWithCar,
      averageWithCar: averageAgeUserWithCar,
    };
    console.log('Example 5');
    console.log(data);
  }
}

// Example  6
export function objetcKeyUsers(companies) {
  if (companies.length > 0) {
    const usersData = {};
    companies.map( (companie) => {
      let count = 0;
      companie.users.map( (user) => {
        const firstName = (user.firstName === '')? `noneName${count}`: user.firstName;
        const lastName = (user.lastName === '')? `noneLastanme${count}`: user.lastName;
        const age = user.age;
        usersData[`${firstName}${lastName}${age}`] = user.car;
        count++;
      });
    });
    return usersData;
  }
}

// Exmaple 7
export function partOne(id, companies) {
  const company = companies.filter((companie)=> {
    if (companie.id === id) {
      return companie.name;
    }
  });
  return company[0].name;
}

export function partTwo(id, companies) {
  return companies.filter((companie)=> (companie.id !== id));
}

export function partThree(id, companies) {
  const company = companies.filter((companie)=> {
    if (companie.id === id) {
      return companie.name;
    }
  });
  delete company[0].users;
  console.log(company);
  return company[0];
}

export function partFour(id, companies) {
  const company = companies.filter((companie)=> {
    if (companie.id === id) {
      return companie.name;
    }
  });

  const randomId = (Date.now());
  company[0].users.push({
    age: 35,
    car: true,
    company: company[0].name,
    firstName: 'Juan',
    id: randomId,
    lastName: 'Delgado',
  });
  company[0].usersLength = company[0].usersLength + 1;
  console.log(company);

  return company[0];
}

export function partFive(id, companies) {
  const company = companies.filter((companie)=> {
    if (companie.id === id) {
      return companie.name;
    }
  });
  delete company[0].users;
  // const data = new FormData();
  // data.append('id', company[0].id);
  // data.append('isOpen', company[0].isOpen);
  // data.append('name', company[0].id);
  // data.append('usersLength', company[0].usersLength);
  // fetch('https://api', {
  //   method: 'PUT',
  //   body: data,
  // }).then( (response) => response.json())
  //     .catch( (error) => console.error('Error:', error))
  //     .then( (response) => console.log('Success:', response));

  console.log(company);
  return company[0];
}

export function partSix(idComany, idUser, companies) {
  const company = companies.filter((companie) => {
    if (companie.id === idComany) {
      return companie;
    }
  });

  company[0].users = company[0].users.filter( (user) => (user.id !== idUser));

  console.log(company);
  return company[0];
}

export function partSeven(idComany, idUser, companies) {
  const company = companies.filter((companie) => {
    if (companie.id === idComany) {
      return companie;
    }
  });

  const user = company[0].users.filter( (user) => (user.id === idUser));
  // const data = new FormData();
  // data.append('id', user.id);
  // data.append('age', user.age);
  // data.append('name', user.lastname);
  // data.append('name', user.name);
  // data.append('car', user.car);
  // fetch('https://api', {
  //   method: 'PATCH',
  //   body: data,
  // }).then( (response) => response.json())
  //     .catch( (error) => console.error('Error:', error))
  //     .then( (response) => console.log('Success:', response));

  console.log('user', user);
  return company[0];
}

export function partEight(idComany, idUser, companies) {
  const company = companies.filter((companie) => {
    if (companie.id === idComany) {
      return companie;
    }
  });

  const user = company[0].users.filter( (user) => (user.id === idUser));
  // const data = new FormData();
  // data.append('id', user.id);
  // data.append('age', user.age);
  // data.append('name', user.lastname);
  // data.append('name', user.name);
  // data.append('car', user.car);
  // fetch('https://api', {
  //   method: 'PUT',
  //   body: data,
  // }).then( (response) => response.json())
  //     .catch( (error) => console.error('Error:', error))
  //     .then( (response) => console.log('Success:', response));

  console.log('user', user);
  return company[0];
}

