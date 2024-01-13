import react, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUSer(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:3003/api/register', {
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        name,
        email,
        password, 
      }),
    })
  }

  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={registerUSer}>
        <input
            value={name}
            onChange={(e)=> setName(e.target.value)}
            type='text'
            placeholder='Name'
        />
        <br/>
         <input
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            type='email'
            placeholder='Email'
        />
        <br/>
         <input
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type='password'
            placeholder='Password'
        />
        <br/>
        <input type='submit' value='Signup'/>
       
      </form>
    </div>
  );
}

export default App;
