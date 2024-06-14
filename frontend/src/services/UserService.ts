import { IUser } from "@/models/IUser";
import { useCallAPI } from "@/utils/apiUtils";

const _UserService = () => {
  const apiVersion = "v1";
  const apiRoot = "user";

  function Login(username: string, password: string) {
    return useCallAPI("POST", `${apiVersion}/${apiRoot}/login`, {
      username,
      password,
    });
  }

  function Logout(user_id: number) {
    return useCallAPI("POST", `${apiVersion}/${apiRoot}/logout`, { user_id });
  }

  function Signup(data: IUser) {
    return useCallAPI("POST", `${apiVersion}/${apiRoot}/signup`, { ...data });
  }

  return {
    Login,
    Logout,
    Signup,
  };
};

const UserService = _UserService();

export default UserService;
