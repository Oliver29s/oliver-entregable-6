import axios from "axios";
import { useForm } from "react-hook-form";
import './styles-pages/register.css'
import './styles-pages/loginPage.css'
import { useState } from "react";
import { Link } from "react-router-dom";


const LoginPage = () => {
   const {register, handleSubmit,reset} =useForm()
   const [token, setToken] = useState()
  const submit = data =>{
    const url ='https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    axios
    .post(url,data)
    .then(res => {console.log(res.data)
      setToken(res.data.token)
    localStorage.setItem('toke', res.data.token)
    localStorage.setItem('name', `${res.data.user.firstName}  ${res.data.user.lastName}`)
    })
    .catch(err =>{ console.log(err)
    localStorage.clear()
    })

    reset({
      email:'',
      password:'',
    })
  }

  const handleClick = () =>{
    setToken()
    localStorage.clear()
  }

  if (localStorage.getItem('name')) {
    return(
    <div className="login__user">
      <i className='bx bxs-user bx2__user'></i>
      <h2>{localStorage.getItem('name')}</h2>
      <button onClick={handleClick} className="buttonn">Logout</button>
      <Link to='/user/register'> To Register </Link>
    </div>)
  }else{

    return (
      <div className="login__page">
  
      <div className="login__form">
        <form  onSubmit={handleSubmit(submit)} className="form">
          <p className="heading">Login</p>
          <input {...register('email')} className="input" placeholder="Email" type="email" />
          <input {...register('password')} className="input" placeholder="Password" type="text" />
          <button className="btn">Submit</button>
        </form>
      </div>
      </div>
    );
  }
};

export default LoginPage;
