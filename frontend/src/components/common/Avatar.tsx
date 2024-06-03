import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

const Avatar = (props: Props) => {
  const { src = "user.svg", alt = "UP" } = props;

  return (
    <div className="avatar placeholder">
      <div className="w-24 rounded-full">
        <Image src={src} alt={alt} width="20" height="20" />
      </div>
      <div className="bg-neutral text-neutral-content rounded-full w-24">
        <span className="text-3xl">D</span>
      </div>
    </div>
  );
};

export default Avatar;
