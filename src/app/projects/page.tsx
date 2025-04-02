import BalloonCard from "@/components/BalloonCard/BalloonCard";
import { projects } from "@/data/projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Juan González | Projects 👾",
  description: "Senior Web Engineer at Kinesso",
};

export default function Projects() {
  return (
    <main>
      <Link className="nes-btn mb-10!" href="/">
        Go Back
      </Link>

      <BalloonCard title="Projects" dialog=" Checkout my projects below." />

      {projects.map((project) => (
        <section
          className="nes-container is-dark my-8! flex! gap-4!"
          key={project.title}
        >
          <Image
            className="shrink-0 h-[100px] w-[100px]"
            src="/package.png"
            alt="package"
            width={50}
            height={25}
          />
          <div>
            <h2 className="text-[#77279d]">{project.title}</h2>
            <p>{project.description}</p>
            <Link href={project.url} className="nes-btn">
              View Project
            </Link>
          </div>
        </section>
      ))}
    </main>
  );
}
