import useToast from "@/components/common/Toast";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const { ToastContainer } = useToast();
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <ToastContainer />
      </body>
    </Html>
  );
}
