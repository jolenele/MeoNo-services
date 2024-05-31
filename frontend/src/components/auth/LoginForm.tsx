import { z } from "zod";
import Form from "../common/Form";
import UserService from "@/services/UserService";

const LoginForm = () => {
  function handleSubmit(values: any) {
    const { isPending, error, data } = UserService.Login(
      values.username,
      values.password,
    );
  }

  return (
    <Form
      data={{
        username: {
          label: "Username",
          zodType: z.string(),
          errorMessage: "Please enter a username",
        },
        password: {
          label: "Password",
          zodType: z.string(),
          errorMessage: "Please enter a password",
        },
      }}
      onSubmit={(data) => {
        handleSubmit(data);
      }}
    />
  );
};

export default LoginForm;
