import Header from "./components/Header";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-titles",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-text",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <html>
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
