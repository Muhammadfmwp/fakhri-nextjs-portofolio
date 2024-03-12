import type { Metadata } from "next";
import { Roboto as PoppinsFont } from "next/font/google";
import "../styles/globals.css"

const Poppins = PoppinsFont({
  weight: '400',
  subsets : ['latin']
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Poppins.className}>{children}</body>
    </html>
  );
}
