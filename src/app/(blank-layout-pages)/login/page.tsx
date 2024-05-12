import { Login } from "@/module/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
