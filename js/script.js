//                                                        -----__________Task #1____________------

let userName = prompt('Enter your Login');
let userPassword = prompt('Enter your Password');

let user = {
  login: userName,
  password: userPassword
};

console.log(user);

for(let item in user) {
  user['login'] = prompt('Enter your Login');
  if (item['login'] !== userName) {
    alert('Такого пользователя не существует, попробуйте еще раз');
    user['login'] = prompt('Enter your Login');
  } 
  user['password'] = prompt('Enter your Password again');
  if(item['password'] !== userPassword){
    alert('Не правильный пароль, попробуйте еще раз');
    user['password'] = prompt('Enter your Password again');
  }
  alert(`Добро пожаловать ${userName}`);
}

//                                                        -----__________Task #2____________------




