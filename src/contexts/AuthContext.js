import React, {createContext, useState, useEffect} from 'react'
import Api from '../api/api.config'
import { useHistory } from 'react-router'

import useToasty from '../../src/contexts/Toasty'
import Example from '../components/LoadingPage'

const Context = createContext()

function AuthProvider ({children}) {
  const {setToasty} = useToasty()
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useHistory()

  useEffect(() =>{
    const token = localStorage.getItem('token')

    if(token){
      Api.defaults.headers.Authorization = `Bearer ${(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  },[])
  
  const handleLogin = async (values) => {
    try {
      const result = await Api.post('/login', values)
        const token = result.data.token
        const userId = result.data.user.id
        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
        Api.defaults.headers.Authorization = `Bearer ${token}`
        setAuthenticated(true)
        router.push('/myaccount')
          setToasty({
            open:true,
            severity:'success',
            text: 'Login realizado com sucesso'
          })
      
    } catch (error) {
      setToasty({
        open:true,
        severity:'error',
        text: 'Login ou senha incorretos.'
      })
    }
  }

  const handleConfirmLogout = async  ({setOpenConfirmModal}) =>{
    setAuthenticated(false)
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      Api.defaults.headers.Authorization = undefined
      router.push('/login')
      setToasty({
        open:true,
        severity:'success',
        text: 'Deslogado com sucesso!'
      })
  }
  
  if(loading){
    return <Example type={'spinningBubbles'} color={'#000000'}/>
  }
  
  return(
    <Context.Provider value={{loading, authenticated, handleLogin, handleConfirmLogout}}>
      {children}
    </Context.Provider>
  )
}

export {Context, AuthProvider}