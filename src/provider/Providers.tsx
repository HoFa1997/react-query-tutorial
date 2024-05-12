"use client";
import { PropsWithChildren } from "react";
import { RQProvider } from "./react-query";
import { SnackbarProvider } from "notistack";
import { NoSsr } from "@mui/material";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <RQProvider>
      <SnackbarProvider
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <NoSsr>{children}</NoSsr>
      </SnackbarProvider>
    </RQProvider>
  );
};
