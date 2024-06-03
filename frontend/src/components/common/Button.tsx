import { ButtonHTMLAttributes } from "react";

type Props = {
  color?: string;
};

const Button = (props: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { color = "primary" } = props;

  const className = "btn btn-sm".concat(` btn-${color}`);

  return <button className={className} {...props} />;
};

export default Button;
