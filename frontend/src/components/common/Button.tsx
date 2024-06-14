import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary" | "accent" | "neutral" | "ghost" | "link";
  size?: "lg" | "md" | "sm" | "xs";
  outline?: boolean;
  disabled?: boolean;
  glass?: boolean;
  noAnimation?: boolean;
  shape?: "wide" | "block" | "circle" | "square";
}

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    color = "primary",
    size = "sm",
    outline,
    disabled,
    glass,
    noAnimation,
    shape,
    ...rest
  } = props;

  const getVariants = () => {
    const colorVariants = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      neutral: "btn-neutral",
      ghost: "btn-ghost",
      link: "btn-link",
    };
    const sizeVariants = {
      lg: "btn-lg",
      md: "btn-md",
      sm: "btn-sm",
      xs: "btn-xs",
    };
    const shapeVariants = {
      wide: "btn-wide",
      block: "btn-block",
      circle: "btn-circle",
      square: "btn-square",
    };

    let _className = `btn w-fit ${colorVariants[color]} ${sizeVariants[size]}`;

    if (shape) {
      _className += ` ${shapeVariants[shape]}`;
    }

    if (outline) {
      _className += " btn-outline";
    }

    if (disabled) {
      _className += " btn-disabled";
    }

    if (glass) {
      _className += " glass";
    }

    if (noAnimation) {
      _className += " no-animation";
    }

    return _className;
  };

  return <button ref={ref} className={getVariants()} {...rest} />;
});

Button.displayName = "Button";

export default Button;
