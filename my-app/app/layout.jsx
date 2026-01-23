import Navbar from "./ui/Navbar"
import { Inter, Raleway , Playfair_Display } from 'next/font/google';
import "./globals.css"
import styles from "./page.module.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={playfair.className} style={{ margin: 0, padding: 0 }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}