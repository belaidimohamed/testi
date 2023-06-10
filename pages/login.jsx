import CustomButton from '@/components/button/button'
import CheckBox from '@/components/checkbox/checkbox'
import Input from '@/components/input/input'
import React, { useState } from 'react'
import styles from './styles/login.module.css'
import * as yup from 'yup';
import { login } from '@/services/api'

export default function Login() {
  const [user, setUser] = useState({username:'',password:'',remember:false})
  const [userError, setUserError] = useState({username:'',password:''})

  let schema = yup.object().shape({
    username: yup.string().required('Please enter a username'),
    password: yup.string().required('Please enter an password'),
    remember:yup.boolean()
  });

  const handleInput = async (attribute,value) => {
    setUser(product => ({...product,...{[attribute]:value}}))
    schema.validateAt(attribute,{[attribute]:value})
    .then(resp=> {
      setUserError(productError => ({...productError,...{[attribute]:''}}))

    })
    .catch(err =>{
      setUserError(productError => ({...productError,...{[err.path]:err.message}}))
    })
  
  }
  const onSubmit = async () => {
    try { await schema.validate(user,{ abortEarly: false }) }
    catch (err) {
      const pathToMessage = err.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setUserError(pathToMessage)
      return
    }
    login(user)
  }
  return (
    <div className={styles.container}>
      <div className={styles.inputs}>
        <div className={styles.title}>Login</div>
        <Input error={userError.username} label="Username" onChange={(value)=>handleInput('username',value)} />
        <Input error={userError.password} label="Password" type='password' onChange={(value)=>handleInput('password',value)} />
        <CheckBox label="Remember me" onChange={(value)=>handleInput('remember',value)} />
        <CustomButton label="Submit" onPress={onSubmit} />
      </div>
    </div>
  )
}
