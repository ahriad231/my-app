
import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users> </Users>
      </header>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count +1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick ={() => setCount(count -1 )}>Decrease</button>
      <button onClick ={() => setCount(count +1)}>Increase</button>
    </div>
  )
  
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => setUsers(data));
  
  },[])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
     <ul>
       {
         users.map(user =><li>{user.website}</li>)
       }
     </ul>
    </div>
  )
}

export default App;