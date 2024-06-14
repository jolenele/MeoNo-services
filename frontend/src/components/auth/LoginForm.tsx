import { z } from "zod";
import Form from "../common/Form";
import UserService from "@/services/UserService";

const LoginForm = () => {
  const schema = z.object({
    username: z.string().min(1, { message: "Please enter a username" }),
    password: z.string().min(1, "Please enter a password"),
  });

  function handleSubmit(values: any) {
    const { isPending, error, data } = UserService.Login(
      values.username,
      values.password,
    );
    console.log(data);
  }

  return (
    <div className="w-96 flex flex-col justify-center items-center gap-4 py-12 border-4 rounded-lg">
      <h2>Login</h2>
      <Form
        formSchema={schema}
        data={[
          {
            name: "username",
            render: (params: Record<string, any>) => (
              <input type="text" placeholder="Username" {...params} />
            ),
          },
          {
            name: "password",
            render: (params: Record<string, any>) => (
              <input type="password" placeholder="Password" {...params} />
            ),
          },
        ]}
        onSubmit={(data) => {
          handleSubmit(data);
        }}
      />
    </div>
  );
};

export default LoginForm;
