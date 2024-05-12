"use client";

import { useEffect, type PropsWithChildren } from "react";
import { useRouter } from "next/navigation";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  // TODO: check user is login or not
  const isUserLoggedIn = true;
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.replace("/login");
    }
  }, [isUserLoggedIn, router]);

  if (!isUserLoggedIn) {
    return null;
  }

  return children;
};
