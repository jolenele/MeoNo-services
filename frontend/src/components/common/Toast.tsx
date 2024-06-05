import React from "react";
import { useCallback, useEffect, useState } from "react";
import Alert from "./Alert";

type ToastProps = {
  message: string | React.ReactElement;
  type?: "info" | "success" | "warning" | "error";
  onClose: () => void;
};

const Toast = (props: ToastProps) => {
  const { message, type = "info", onClose } = props;

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return <Alert type={type}>{message}</Alert>;
};

const useToast = () => {
  const [toasts, setToasts] = useState<any[]>([]);

  const addToast = useCallback(
    (message: string | React.ReactNode, type: "success" | "error") => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type }]);
    },
    [],
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const ToastContainer = () => {
    return (
      <div className="toast">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    );
  };

  return { ToastContainer, addToast };
};

export default useToast;
