import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "React Query Tutorial",
  description: "Recorded By Hossein Fatemi",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
