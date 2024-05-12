import { BlankLayout, Providers } from "@/provider";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Providers>
      <BlankLayout>{children}</BlankLayout>
    </Providers>
  );
};

export default Layout;
