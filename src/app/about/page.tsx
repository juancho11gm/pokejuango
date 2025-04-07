import AboutTable from "@/components/AboutTable/AboutTable";
import BalloonCard from "@/components/BalloonCard/BalloonCard";
import { companies } from "@/data/companies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Juan González | About 👾",
  description: "Senior Web Engineer at Kinesso",
};

export default function About() {
  return (
    <main>
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
        <a
          className="nes-btn"
          href="https://drive.google.com/file/d/1ehZIpJbJlRl91m2Lx2MJ-EggcCfJ43uW/view?usp=sharing"
        >
          Download my CV
        </a>
      </div>
    </main>
  );
}
