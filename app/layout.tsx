import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentina Ferreira Orduna",
  description: "Portfolio de Valentina Ferreira Orduna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {/* <Navbar /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
