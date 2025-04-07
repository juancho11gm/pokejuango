import BalloonCard from "@/components/BalloonCard/BalloonCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Juan González | Contact 👾",
  description: "Senior Web Engineer at Kinesso",
};

export default function Page() {
  return (
    <main className="mx-auto">
      <BalloonCard title="Contact" dialog="Let's connect!" />
      <section className="nes-container is-rounded is-dark with-title is-centered">
        <p className="title">Social Media</p>

        <div className="my-4!">
          <ul className="flex! flex-col! gap-8!">
            <li>
              <Link
                href="https://www.github.com/juancho11gm"
                className="text-white! flex! items-center! gap-4"
              >
                <i className="nes-icon github is-large"></i>
                <span>@juancho11gm</span>
              </Link>
            </li>

            <li>
              <Link
                href="https://www.linkedin.com/in/juansebastiangonzalezm/"
                className="text-white! flex! items-center! gap-4"
              >
                <i className="nes-icon linkedin is-large"></i>

                <span>Juan González</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
