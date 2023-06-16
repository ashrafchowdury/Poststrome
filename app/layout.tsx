import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full text-white`}>
        <div className="fixed -z-40 top-0 left-0 right-0 bottom-0 bg-transparent"></div>
        {children}
      </body>
    </html>
  );
}