import { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="border-2 rounded-full font-bold text-lg bg-danger hover:scale-105"
      {...props}
    />
  );
};

export default Button;
