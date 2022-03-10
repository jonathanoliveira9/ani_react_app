import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = () => {
  return (
    <form>
      <p>
        <Input id="email" label="Email" required/>
      </p>
      <p>
        <Input id="password" type="password" label="Password" />
      </p>
      <Button /> 
    </form>
  )
}

export default Form