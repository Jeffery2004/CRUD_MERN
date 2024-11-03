import React from "react";
import { useState,useEffect} from "react";
import axios from 'axios';
import './User.css'
import {Link} from 'react-router-dom';
const User = () => {
    const[users,setusers]=useState([{}]);
    useEffect(()=>{
        axios.get('http://localhost:3000')
        .then((result)=>{
            setusers(result.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    const del=async(id)=>{
        await axios.delete('http://localhost:3000/delete/'+id)
        .then((result)=>{
            console.log(result);
            window.location.reload();
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <button className="add"><Link to='/create' className='link'> Add User</Link></button>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
          {
            users.map((user)=>{
                return <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td><button><Link to={`./update/${user._id}`}>Update</Link></button><button onClick={(e)=>del(user._id)}>Delete</button></td>
                </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default User;
