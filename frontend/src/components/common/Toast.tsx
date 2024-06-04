import { useCallback, useEffect, useState } from "react";

type ToastProps = {
  message: string | React.ReactElement;
  onClose: () => void;
};

const Toast = (props: ToastProps) => {
  const { message, onClose } = props;

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return <div className="toast">{message}</div>;
};

const useToast = () => {
  let toast;

  const ToastContainer = () => {
    const [toasts, setToasts] = useState<any[]>([]);

    toast = useCallback(
      (message: string | React.ReactNode, type: "success" | "error") => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
      },
      [],
    );

    const removeToast = useCallback((id: number) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
      <>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </>
    );
  };

  return { ToastContainer, toast };
};

export default useToast;
