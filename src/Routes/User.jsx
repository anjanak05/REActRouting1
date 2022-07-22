import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';

const User = () => {
  const [data, setData] = useState([]);
  const [searchParam, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(Number(searchParam.get("page"))|| 1);
  

  useEffect(() => {
    setSearchParams({
      page
    })
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      });
  }, [page]);
  console.log(data);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyContent: 'space-around',
      }}
    >
      <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>

      {data.map(user => (
        <div style={{ margin: 'auto' }}>
          <img src={user.avatar} alt={user.id} />
          <Link to={`/user/${user.id}`} key={user.id}>
            {user.first_name} {user.last_name}{' '}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default User;
