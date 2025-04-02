import BalloonCard from "@/components/BalloonCard/BalloonCard";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link className="nes-btn mb-10!" href="/">
        Go Back
      </Link>

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

                <span>/in/juansebastiangonzalezm</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
