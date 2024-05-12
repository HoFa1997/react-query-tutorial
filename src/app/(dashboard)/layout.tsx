import { LayoutProvider, Providers } from "@/provider";
import { AuthProvider } from "@/provider/auth";
import { PropsWithChildren } from "react";

const Layout = async ({ children }: PropsWithChildren) => {
  return (
    <Providers>
      {/* <AuthProvider> */}
      <LayoutProvider>{children}</LayoutProvider>
      {/* </AuthProvider> */}
    </Providers>
  );
};

export default Layout;
