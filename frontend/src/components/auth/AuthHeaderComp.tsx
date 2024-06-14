import { IUser } from "@/models/IUser";
import Avatar from "../common/Avatar";
import Button from "../common/Button";
import { useRouter } from "next/router";

type Props = {
  user: null | IUser;
  logout: () => void;
};

const AuthHeaderComp = (props: Props) => {
  const { user, logout } = props;

  const router = useRouter();

  return (
    <>
      {!user ? (
        <>
          <Button onClick={() => router.push("/auth/login")}>Login</Button>
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
