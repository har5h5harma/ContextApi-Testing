import React from 'react'
import { useContext } from 'react'
import newcontext from '../contextfile/context'

const User1 = () => {
    const user=useContext(newcontext);
  return (
    <div>
      <h1>Hello {user.name}</h1>
      <h2>your class is {user.yourclass}</h2>
      <h2>your section is {user.yoursection}</h2>
    </div>
  )
}

export default User1;
