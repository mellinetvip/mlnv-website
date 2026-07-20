export const metadata = {
  title: "MLNV | Mellinetvip Community Token",
  description: "Official MLNV Token on TON Blockchain",
  keywords: ["MLNV", "TON", "Crypto", "Token", "Mellinetvip"],
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
