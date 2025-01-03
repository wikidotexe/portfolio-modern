import React from "react";
import ActiveSectionContextProvider from "./active-section";
import ThemeContextProvider from "./theme-context";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
