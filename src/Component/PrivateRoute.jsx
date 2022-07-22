import React from 'react'
import { AppContextAuth } from '../Context/AuthContext'
import  { useContext } from 'react'
import { Navigate} from "react-router-dom"



const PrivateRoute = ({children}) => {
    const{state }= useContext(AppContextAuth)
    if(!state.isAuth){
        return <Navigate to ="/Login"/>
      }
  return (
 children
  )
}

export default PrivateRoute