import { Button as ShaButton } from "@/components/ui/button";

type Props = {
  title: string;
  onClick: () => void;
};

const Button = (props: Props) => {
  const { title, onClick } = props;

  return <ShaButton onClick={onClick}>{title}</ShaButton>;
};

export default Button;
