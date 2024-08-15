
import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContetx";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from '@/components/Footer';
import "./globals.css";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MELI - Cards Game",
  description: "Memory game, using Mercado Libre API",
  keywords: ["memory game", "Mercado Libre", "cards game", "API", "react"],
  authors: [{name:"Juan Mateo Buccolini", url:"https://www.linkedin.com/in/juan-mateo-buccolini/"}] 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <AuthProvider>
     
      <html lang="en">
        <body className={`${inter.className}`}>
         <NavBar/>
          {children}
          <Footer/>
          </body>
      </html>
    </AuthProvider>
  );
}
