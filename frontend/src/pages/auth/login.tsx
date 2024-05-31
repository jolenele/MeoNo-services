import MainLayout from "@/components/layouts/MainLayout";
import { NextPageWithLayout } from "../_app";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage: NextPageWithLayout = () => {
  return <LoginForm />;
};

LoginPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default LoginPage;
