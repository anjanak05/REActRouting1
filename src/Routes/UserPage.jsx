import {React, useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom" 

const UserPage = () => {
  const params = useParams();
  const [data , setData] = useState([])
  useEffect(()=>{
    fetch(`https://reqres.in/api/users/${params.user_id}`)
    .then((res)=> res.json())
    .then((res)=>{   setData(res.data)
    })
  }, [])

  return <div>UserPage is {params.user_id}
  <h1>{data.first_name}  {data.last_name}</h1>
  <img style={{display:"flex", justifyContent:"center",  alignItem:'center'}} src={data.avatar} alt={data.id}/>
  <Link to="/User">Go back</Link>
  </div>;
};

export default UserPage;
