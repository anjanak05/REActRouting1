import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"


const User = () => {
  const [data , setData] = useState([])

  useEffect(()=>{
    fetch(`https://reqres.in/api/users`)
    .then((res)=> res.json())
    .then((res)=>{   setData(res.data)
    })
  }, [])
  console.log(data)
  return (
    <div style={{ display:"flex", justifyContent:"space-around"}}>
{data.map((user)=>(
      <div>
        <img src={user.avatar} alt={user.id}/>
      <Link to={`/user/${user.id}`} key ={user.id}>{user.first_name}  {user.last_name} </Link>
        </div>
  
))}
    </div>
  )
}

export default User