import{useNavigate} from 'react-router-dom';
import {useState} from 'react'
import axios from 'axios';
const createUser = () => {
    const navigate=useNavigate();
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[age,setAge]=useState('');
    const submit=async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:3000/create',{name,email,age})
        .then((result)=>{
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
      <h1>Add User</h1>
      <form>
        <label htmlFor='name'>Name</label>
        <br></br>
        <input type='text' id='name' onChange={(e)=>{setName(e.target.value)}}></input>
        <br></br>
        <label htmlFor='email'>Email</label>
        <br></br>
        <input type='text' id='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
        <br></br>
        <label htmlFor='age' >Age</label>
        <br></br>
        <input type='number' id='age' onChange={(e)=>{setAge(e.target.value)}}></input>
        <br></br>
        <button onClick={submit}>Add user</button>
      </form>
    </div>
  )
}

export default createUser
