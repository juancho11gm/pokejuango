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

      <div className="grid! grid-cols-1! gap-4! mt-4! md:grid-cols-2!">
        {projects.map((project) => (
          <section
            className="nes-container is-dark flex! justify-between! !flex-col"
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
            <ul className="flex! flex-wrap! gap-3!">
              {project.tags?.map((tag) => (
                <li key={tag} className="nes-badge w-auto!">
                  <span
                    className="is-primary w-auto! static!"
                    style={{
                      backgroundColor: "#77279d",
                      boxShadow:
                        "0 .5em #77279d, 0 -.5em #77279d, .5em 0 #77279d, -.5em 0 #77279d",
                    }}
                  >
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href={project.url}
              className="nes-btn w-full! shrink-0! sm:max-w-[300px] mx-auto!"
            >
              View Project
            </Link>
          </section>
        ))}
      </div>
    </main>
  );
}
