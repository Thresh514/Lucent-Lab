import Home from "../components/Homesection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from 'next/head';

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>香香烛坊 - 不只是蜡烛</title>
        <meta name="description" content="香香烛坊 - 点亮灵感，不只是蜡烛" />
      </Head>

      <main className="w-screen h-screen flex flex-col overflow-hidden">
        <Navbar />
        <Home />
        <Footer />
      </main>

    </div>
  );
} 