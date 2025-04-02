import AboutTable from "@/components/AboutTable/AboutTable";
import BalloonCard from "@/components/BalloonCard/BalloonCard";
import { companies } from "@/data/companies";
import Link from "next/link";

export default function About() {
  return (
    <main>
      <Link className="nes-btn mb-10!" href="/">
        Go Back
      </Link>

      <BalloonCard
        title="About"
        dialog="
              I’m a passionate Software Developer with over 6 years of
              experience using Web Development technologies.  <br> <br>
              My passion for reading and learning about AI, programming, and
              personal growth keeps me up-to-date with industry trends and fuels
              my drive to innovate and excel.
            "
      />

      <AboutTable companies={companies} />

      <div className="flex justify-center my-16!">
        <button className="nes-btn">Download my CV</button>
      </div>
    </main>
  );
}
