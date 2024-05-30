import { IUser } from "@/models/IUser";
import Avatar from "../common/Avatar";

type Props = {
  user: null | IUser;
};

const AuthHeaderComp = (props: Props) => {
  const { user } = props;

  return (
    <>
      {!user ? (
        <>
          <Avatar />
        </>
      ) : (
        <>
          <Avatar />
        </>
      )}
    </>
  );
};

export default AuthHeaderComp;
