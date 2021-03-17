import React from "react";
import "../App.css";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup.object().shape({
  firstname: yup.string().required("Name field is empty "),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null])

})

function Form() {
  //let's destructure the useForm component that we imported

  const { register , handleSubmit , errors } = useForm({
    //resolver is an obeject passed to useForm hook
    resolver: yupResolver(schema), // this is how we connect yup to react-hook-form
  
  });


  const submitForm = (data) => {
    console.log(data);
  };


  return (
    <div className="Form">
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="firstName"
            ref={register}
            placeholder="First Name..."
          />
         <p>{errors.firstName?.message}</p>
          <input
            type="text"
            name="lastName"
            ref={register}
            placeholder="Last Name..."
         
          />
         <p>{errors.lastName?.message}</p>
          <input
            type="text"
            name="email"
            ref={register}
            placeholder="Email..."
          
          />
         <p>{errors.email?.message}</p>
          <input type="text" name="age" ref={register} placeholder="Age..." />
          <p>{errors.age?.message}</p>
          <input
            type="password"
            name="password"
            ref={register}
            placeholder="Password..."
          
          />
         <p>{errors.password?.message}</p>
          <input
            type="password"
            name="confirmPassword"
            ref={register}
            placeholder="Confirm Password..."
           
          />
          <p>{errors.confirmPassword && "Passwords don't match"}</p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
