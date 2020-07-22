//                                                        -----__________Task #1____________------
let userName = prompt('Enter your Login');

console.log(userName);
while(userName.lenght > 10 && userName.length !== '') {
  alert('Длинна Логина недолжна привышать 10 символов');
  userName = prompt('Enter your Login');
}
let userPassword = prompt('Enter your Password');

let user = {
  login: userName,
  password: userPassword
};

userAuthName = prompt('Enter your Login Auth');
while (userAuthName !== user.login) {
  alert('Такого пользователя не существует, попробуйте еще раз');
  userAuthName = prompt('Enter your Login again');
}

userAuthPassword = prompt('Enter your Password Auth');
while (userAuthPassword !== user.password) {
  alert('Не правильный пароль, попробуйте еще раз');
  userAuthPassword = prompt('Enter your Password again');
}

console.log(`Добро пожаловать ${userName}`);




//                                                        -----__________Task #2____________------


var persons = [
  {id: 10, name: 'Vasya', age: 28},
  {id: 11, name: 'Kolya', age: 16, parentId: 14},
  {id: 12, name: 'Anna', age: 37},
  {id: 13, name: 'Zoya', age: 9, parentId: 12},
  {id: 14, name: 'Arkadiy', age: 45},
];

for(let i = 0; i < persons.lenght; i++){
  console.log(persons[i]);
}
