import React from "react";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onValid = (data) => {
    console.log(data);
  };
  const onInvalid = (error) => {
    console.log(error);
  };
  const pw = watch("password", "value");

  function pw_check(pw) {
    const num = pw.search(/[0-9]/g);
    const eng = pw.search(/[a-z]/gi);
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (pw.search(/\s/) !== -1) {
      return false;
    } else if (num < 0 || eng < 0 || spe < 0) {
      return false;
    } else {
      return true;
    }
  }

  const confirmPassword = (cpw) => {
    if (cpw === pw) return true;
    else return false;
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <p>id</p>
      <input type={"text"} {...register("id")} />
      <p>password</p>
      <input
        type={"password"}
        {...register("password", {
          validate: pw_check,
          minLength: {
            value: 10,
            message: "10자 이상 입력해주세요.",
          },
        })}
      />
      {errors.password && errors.password.type === "validate" ? (
        <p>영문, 숫자, 특수문자를 포함해주세요.</p>
      ) : null}
      {errors.password && errors.password.type === "minLength" ? (
        <p>{errors.password.message}</p>
      ) : null}
      <p>confirm password</p>
      <input
        type={"password"}
        {...register("confirmPassword", {
          validate: confirmPassword,
        })}
      />
      {errors.passwordconfirm && errors.passwordconfirm.type === "validate" ? (
        <p>같은 비밀번호를 입력해주세요.</p>
      ) : null}
      <p>email</p>
      <input
        {...register("email", {
          pattern: {
            value:
              /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
            message: "이메일 형식에 맞게 입력해주세요.",
          },
        })}
      />
      {errors.email && errors.email.type === "pattern" ? (
        <p>{errors.email.message}</p>
      ) : null}
      <p>Phone</p>
      <input
        {...register("phoneNum", {
          pattern: {
            value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
            message: "'-'를 제외한 숫자만 입력해주세요.",
          },
        })}
      />
      {errors.phoneNum && errors.phoneNum.type === "pattern" ? (
        <p>{errors.phoneNum.message}</p>
      ) : null}
      <button type={"submit"}>submit</button>
    </form>
  );
};

export default SignUp;
