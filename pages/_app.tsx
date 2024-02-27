import "../styles/globals.css";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../assets/Logo.png";
import profile from "../assets/PFP.png";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="bg-white px-2 sm:px-4  drop-shadow-md dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <Image src={logo} height={100} alt="Pasc Logo" />
          </a>
          <div className="flex md:order-2">
            <span className="self-center text-2xl mr-5 font-semibold whitespace-nowrap dark:text-white text-[#134467]">
              Search Alumini
            </span>

            <Image
              src={profile}
              height={30}
              width={50}
              className="rounded-full"
              alt="Profile"
            />
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a href="" target="_blank" rel="noopener noreferrer">
          Developed By PASC
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
