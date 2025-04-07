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
      <h1 className="text-4xl font-bold mb-8 text-white">Projects</h1>

      <div className="grid! grid-cols-1! gap-4! mt-4! sm:grid-cols-2!">
        {projects.map((project) => (
          <section
            className="nes-container is-dark flex! !flex-col gap-2!"
            key={project.title}
          >
            <div className="flex! gap-2!">
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
              </div>
            </div>
            <Link
              href={project.url}
              className="nes-btn w-full! shrink-0! sm:max-w-[300px]"
            >
              View Project
            </Link>
          </section>
        ))}
      </div>
    </main>
  );
}
