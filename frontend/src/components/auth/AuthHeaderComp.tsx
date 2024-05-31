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
          <Button>Login</Button>
        </>
      ) : (
        <>
          <Avatar src={user.imageURL} alt={user.username} />
        </>
      )}
    </>
  );
};

export default AuthHeaderComp;
