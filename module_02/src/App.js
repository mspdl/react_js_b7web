import React from 'react';

// Using Class
/*
class App extends React.Component {

  render() {
    return <h1>Test 1, 2, 3 ...</h1>
  }

}
*/

// Using Function
/* 
function App(){
  return <h1>Test 4, 5, 6 ...</h1>
}
*/

//  Using Variable
/*
let App = () => {
  return <h1>Test 7, 8, 9 ...</h1>
}
*/

// Using Variable - Shorter
let App = () => <h1>Test 10, 11, 12 ...</h1>

export default App;