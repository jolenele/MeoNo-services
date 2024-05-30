import { IUser } from "@/models/IUser";
import Avatar from "../common/Avatar";
import Button from "../common/Button";

type Props = {
  user: null | IUser;
  logout: () => void;
};

const AuthHeaderComp = (props: Props) => {
  const { user, logout } = props;

  return (
    <>
      {!user ? (
        <>
          <Button title="Login" />
        </>
      ) : (
        <>
          <Avatar user={user} />
        </>
      )}
    </>
  );
};

export default AuthHeaderComp;
