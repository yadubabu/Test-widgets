import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Users=()=>{
    const [users,setUsers] = useState([]);

    useEffect(()=>{
       const fetchUsers=async ()=>{
            const {data}=await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(data);

       }
      fetchUsers();     
    },[]);

    return(
        <div>
            {users.map((user)=><>
                <div className='ui segment'>
                <ul><li><h1>{user.name}</h1><a href='#'>{user.email}</a>
                <p>{user.address.street}</p>
                </li></ul>
                </div>
            </>)}
        </div>
    )
}

export default Users;