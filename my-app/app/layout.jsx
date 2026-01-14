import Navbar from "./ui/Navbar"
import { Inter, Roboto_Mono } from 'next/font/google';
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional, choose what you need
});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

