import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

export const metadata: Metadata = {
  title: "FinLeaf Legal — Capital Markets Consultancy",
  description: "FinLeaf Legal sets up funds, portfolio managers, mutual funds and GIFT City entities — your one-stop capital markets consultancy from incorporation to IPO.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
