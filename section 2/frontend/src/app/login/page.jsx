import React from 'react'
import classes from'./login.module.css';
import Input from '../../../component/Input';
const Login = () => {
  return (
    <div>
<h1 className='text-center text-2xl font-bold'>Login Page</h1>
<button className ='btn'>login button</button>
<button className={classes.myBtn}>Module CSS</button>

<Input id={'name'} label={'Full Name'} type={'text'}/>
<Input id={'name'} label={'email address'} type={'email'}/>
<Input id={'name'} label={'password'} type={'password'}/>

    </div>
  )
}

export default Login;