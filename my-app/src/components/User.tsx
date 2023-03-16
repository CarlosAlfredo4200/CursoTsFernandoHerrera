import React, { useState } from 'react'


interface User {
  id: string;
  name: string;
}
export const User = () => {

    const [user, setUser] = useState<User>();

    const Login = () => {
       setUser({
        id: 'ABC123',
        name: 'Carlos'
       }) 
    };

  return (

    <div><h3>Usuario : useState</h3>
    <button className='ov-btn-slide-top' onClick={ Login }>Login</button>
    {
      (!user) 
      ? <pre> Usuario no encontrado!!!</pre>
      : <pre> { JSON.stringify( user)}</pre>
    }
    </div>
  )
}
