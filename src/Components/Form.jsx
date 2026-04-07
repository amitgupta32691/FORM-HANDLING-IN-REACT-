import React, { useState } from 'react'

const Form = () => {
const [name, setName] = useState('amitkumar')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const amitkumar=(e)=>{
    e.preventDefault();
    console.log(name,email,password)
  }
  return (
    <form onSubmit={amitkumar}>
    <div>
      name: <input onChange={(e)=>setName(e.targer.value)} value={name} type="text" />
    </div>
      <div>
      password: <input  onChange={(e)=>setPassword(e.target.value)} value={password}type="password" />
    </div>
      <div>
      email: <input  onChange={(e)=> setEmail(e.target.value)} value={email}type="email" />
    </div>
    <div>
     <input type="submit" value="submit" />
    </div>
    </form>
  )
}

export default Form;
