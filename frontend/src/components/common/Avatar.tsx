import {
  Avatar as ShaAvatar,
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
    <ShaAvatar className="border">
      <AvatarImage src={src} />
      <AvatarFallback>{alt}</AvatarFallback>
    </ShaAvatar>
  );
};

export default Avatar;
