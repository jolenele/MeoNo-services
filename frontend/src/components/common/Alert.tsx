import React from "react";

export type AlertType = "info" | "success" | "warning" | "error";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: AlertType;
}

const Alert = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, type, ...rest } = props;

  const getVariants = () => {
    const typeVariants = {
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    };

    return `alert ${typeVariants[type]}`;
  };

  return (
    <div ref={ref} className={getVariants()} {...rest}>
      {children}
    </div>
  );
});

Alert.displayName = "Alert";

export default Alert;
