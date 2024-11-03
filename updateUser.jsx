import React from 'react'
import{useState,useEffect} from 'react';
import{useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';
const updateUser = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[age,setAge]=useState('');
    const{id}=useParams();
    const nav=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3000/getUser/'+id)
        .then((result)=>{
            setName(result.data.name);
            setEmail(result.data.email);
            setAge(result.data.age);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    const update= async(e)=>{
        e.preventDefault()
        await axios.put('http://localhost:3000/update/'+id,{name,email,age})
        .then((result)=>{
            setName(result.data.name);
            setEmail(result.data.email);
            setAge(result.data.age);
            nav('/');
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <h1>Update User</h1>
      <form>
        <label htmlFor='name'>Name</label>
        <br></br>
        <input type='text' id='name' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <br></br>
        <label htmlFor='email'>Email</label>
        <br></br>
        <input type='text' id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br></br>
        <label htmlFor='age' >Age</label>
        <br></br>
        <input type='number' id='age'value={age} onChange={(e)=>{setAge(e.target.value)}}></input>
        <br></br>
        <button onClick={update}>Update</button>
      </form>
    </div>
  )
}

export default updateUser
