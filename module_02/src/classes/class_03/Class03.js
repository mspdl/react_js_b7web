import React from 'react';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

function App (){
  let name = 'Morgan'
  let age = 31
  let user = {
    firstName: 'Morgan',
    lastName: 'Espindola',
    nickname: 'Morgan'
  }
  let image = 'https://www.google.com.br/google.jpg'

  return <>
    <div>
      My name is {name}. I'm {age} years old.
    </div>
    <div>
      My full name is {formatName(user)}. You can call me {user.nickname}!
    </div>
    <img src={image}/>
  </>
}

export default App;