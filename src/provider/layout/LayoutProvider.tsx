"use client";

import { Container, CssBaseline } from "@mui/material";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { SnackbarProvider } from "notistack";

export const LayoutProvider = ({ children }: PropsWithChildren) => {
  const pathName = usePathname();

  return (
    <>
      {!pathName.includes("login") && <Header />}
      <Container maxWidth="xl">
        <CssBaseline />
        <SnackbarProvider
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          autoHideDuration={1000}
        >
          {children}
        </SnackbarProvider>
      </Container>
    </>
  );
};
