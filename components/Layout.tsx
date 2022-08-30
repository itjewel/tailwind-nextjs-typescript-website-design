import Head from 'next/head';
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface Props {
  children?: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <div className="relative">
       <div className="flex min-h-screen flex-col relative">
      <Head>
        <title>GiantIt Land Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="w-full text-xl text-gray-400 mt-12 py-12 md:mt-6 lg:mt-6 md:py-8 lg:py-8">
      <main className="flex-grow">{children}</main>
      </div>
      </div>
      <Footer />
    </div>
  );
}
