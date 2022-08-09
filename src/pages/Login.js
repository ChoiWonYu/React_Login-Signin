import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form>
        <p>ID</p>
        <input type="ID" {...register("ID")}></input>
        <p>PW</p>
        <input type="password" {...register("PW")}></input>
      </form>
    </div>
  );
};

export default Login;
