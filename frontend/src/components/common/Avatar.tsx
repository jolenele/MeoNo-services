import {
  Avatar as Ava,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

type Props = {
  src: string;
  alt: string;
};

const Avatar = (props: Props) => {
  const { src = "user.svg", alt = "UP" } = props;

  return (
    <Ava className="border">
      <AvatarImage src={src} />
      <AvatarFallback>{alt}</AvatarFallback>
    </Ava>
  );
};

export default Avatar;
