import Navbar from "@/components/Navbar";
import { Anonymous_Pro } from "next/font/google";
import { Web3ModalProvider } from "../context/Web3Modal";
import { DaoProvider } from "../context/DAO";
import "./globals.css";
const inter = Anonymous_Pro({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "juice",
  description: "Generated by juice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Web3ModalProvider>
          <Navbar />
          <DaoProvider>
            <div className="px-6 mb-20">{children}</div>
          </DaoProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
