import Head from 'next/head';
import Image from 'next/image';
import { Header } from './components/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 thistle-background">
        <h1>Thistle Signal</h1>
        <h2>
          Answer the Signal. Help your community. And then Signal that
          you&apos;ve answered the Signal.
        </h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect x="35" y="50" width="30" height="40" fill="#000000" />

          <polygon points="30,50 70,50 50,20" fill="#000000" />

          <rect x="38" y="55" width="24" height="2" fill="#D8BFD8" />
          <rect x="38" y="62" width="24" height="2" fill="#D8BFD8" />
          <rect x="38" y="69" width="24" height="2" fill="#D8BFD8" />

          <rect x="47" y="75" width="6" height="15" fill="#000000" />

          <circle cx="53" cy="60" r="3" fill="#FFFFFF" />
        </svg>
      </main>
    </>
  );
}
