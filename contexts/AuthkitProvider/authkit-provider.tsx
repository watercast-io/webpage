"use client";
import { Session } from "@/lib/auth/interfaces";
import { AuthkitContextType } from "@/types";
import React, { createContext } from "react";

export const initAuthkitContextState: AuthkitContextType = {
  session: undefined
};

export const AuthkitContext = createContext<AuthkitContextType | undefined>(initAuthkitContextState);

export const AuthkitProvider = ({
    children,
    session
  }: {
    children: React.ReactNode;
    session: Session | undefined;
  }): JSX.Element => {
    
  return (
    <AuthkitContext.Provider
      value={{ session }}
    >
      {children}
    </AuthkitContext.Provider>
  );
}