import { Quicksand } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
const inter = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Dentamax',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
  );
}
