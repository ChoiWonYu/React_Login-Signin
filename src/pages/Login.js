import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data) => {
    alert("로그인 되었습니다.");
  };
  const onInValid = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <p>ID</p>
        <input
          placeholder="이메일을 입력해주세요"
          type="ID"
          {...register("ID", {
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞게 입력해주세요.",
            },
          })}
        ></input>
        {errors.ID && <div>{errors.ID.message}</div>}
        <p>PW</p>
        <input type="password" {...register("PW")}></input>
        <button>LogIn</button>
      </form>
    </div>
  );
};

export default Login;
