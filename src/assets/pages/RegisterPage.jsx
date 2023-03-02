import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './styles-pages/register.css'

const RegisterPage = () => {
  const { register, reset, handleSubmit } = useForm();
  const submit = (data) => {
    console.log(data);
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";
    axios
      .post(url, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    reset({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
    })  
  };
  return (
    <div className="contain__register">
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>
            {" "}
            First name
            <input {...register("firstName")} type="text" id="firstName" />
          </label>
        </div>
        <div>
          <label>
            Last name
            <input {...register("lastName")} type="text" id="lastName" />
          </label>
        </div>
        <div>
          <label>
            Email
            <input {...register("email")} type="email" id="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input {...register("password")} type="password" id="password" />
          </label>
        </div>
        <div>
          <label>
            Phone
            <input {...register("phone")} type="number" id="phone" />
          </label>
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
