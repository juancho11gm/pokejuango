import BalloonCard from "@/components/BalloonCard/BalloonCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Juan González 👾",
  description: "Senior Web Engineer at Kinesso",
  metadataBase: new URL("https://juangodev.netlify.app/"),
};

export default function Home() {
  return (
    <>
      <main className="max-w-[1042px] mx-auto">
        <BalloonCard
          title="Home"
          dialog={
            <p>
              Hello! Welcome to my website.
              <br />
              <br />
              I am Juan González, Senior Web Engineer at Kinesso.
              <br />
              <br />
              Feel free to navigate through the links.
            </p>
          }
        />

        <nav className="grid! grid-cols-2! gap-1! mt-8!">
          <Link href="/about" className="nes-btn">
            About
          </Link>
          <Link href="/projects" className="nes-btn">
            Projects
          </Link>
          <Link href="/blog" className="nes-btn">
            Blog
          </Link>
          <Link href="/contact" className="nes-btn">
            Contact
          </Link>
        </nav>
      </main>
    </>
  );
}
