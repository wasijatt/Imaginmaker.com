import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imaginmaker - where imagination meets creation",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>

        {children}
        <Footer/>
      </body>
    </html>
  );
}
