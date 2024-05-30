import { useCallAPI } from "@/utils/apiUtils";

const UserService = () => {
  const apiVersion = "v1";
  const apiRoot = "user";

  function Login(username: string, password: string) {
    return useCallAPI("POST", `${apiVersion}/${apiRoot}/login`, {
      username,
      password,
    });
  }

  return {
    Login,
  };
};

export default UserService;
