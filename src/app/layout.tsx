import { Metadata } from "next";
import "./globals.css";
import ModalProvider from "@/context/ModalProvider";
import DetailsInfoProvider from "@/context/CardDetailsInfoProvidre";
import StoreProvider from "./StoreProvider";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head"; 

export const metadata: Metadata = {
  title: "anishop",
  description: "shop anishop",
  openGraph: {
    title: "anishop",
    description: "shop anishop",
    url: "https://anishops.vercel.app/",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/onlineshop-4f347.appspot.com/o/logo%2Fanishop.png?alt=media&token=edd7237f-7bf7-4742-ad6c-7b11a81014d0",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Head>
        <meta
            name="google-site-verification"
            content="1m40ZhpkaOBu8WRGiAlr705V3rbGKKkwx9qFUdNcQTE"
          />
        </Head>
        
        <StoreProvider>
          <ModalProvider>
            <DetailsInfoProvider>
              <NavBar />
              {children}
              <Footer />
            </DetailsInfoProvider>
          </ModalProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
