import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MLNV | Mellinetvip Community Token",
  description: "The official token of Mellinetvip community on TON.",
  keywords: [
    "MLNV",
    "Mellinetvip",
    "TON",
    "TON Blockchain",
    "Crypto",
    "Web3",
  ],
  authors: [{ name: "MLNV Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
