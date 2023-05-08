import Head from "next/head";
import { Footer } from "./footer";
import { Header } from "./header";

interface LayoutProps {
  head: React.ReactNode;
  children: React.ReactNode;
}

export const Layout = ({ children, head }: LayoutProps) => {
  return (
    <>
      <Head>{head}</Head>
      <div className="dark bg-gradient-to-b from-[#001153] from-20% via-blue-900 via-35% to-[#001153] to-80%">
        <main className="dark:text-white">
          <Header />
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
};
