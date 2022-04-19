import React, { useEffect, useState } from 'react'
import Login from '../Login/Login'
import Post from './Post';

function Admin() {
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);
    useEffect( () => {
        const value = JSON.parse(localStorage.getItem('token'));
        if(value){
            setUser(value);
            setShow(!show);
        }
    }, []);
    console.log(show);
    
  return ( !show  ? ( < Login />) : (<Post />));
}

export default Admin