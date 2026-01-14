import Navbar from "./ui/Navbar"
import { Inter, Raleway , Playfair_Display } from 'next/font/google';
import "./globals.css"
import styles from "./page.module.css";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"], // optional, choose what you need
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"], // optional, choose what you need
});
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={playfair.className}  >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

