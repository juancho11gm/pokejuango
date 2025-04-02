import BalloonCard from "@/components/BalloonCard/BalloonCard";
import { companies } from "@/data/companies";
import Image from "next/image";
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

      {companies.map((company) => {
        return (
          <section
            key={company.name}
            className="nes-container with-title is-dark my-8!"
          >
            <a
              href={company.href}
              className="inline-flex! items-center! gap-4! text-white! title"
            >
              <Image
                src={company.iconUrl}
                width={50}
                height={50}
                alt={company.name}
                className="nes-avatar is-medium"
                style={{
                  imageRendering: "pixelated",
                }}
              />
              <div className="flex flex-col">
                <h2 className="m-0!">{company.name}</h2>
                <time>
                  {company.startDate} - {company.endDate || "Current"}
                </time>
              </div>
            </a>
            <div className="nes-table-responsive mt-4">
              <table className="nes-table is-bordered is-dark before:content-none!">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {company.projects.map((project) => {
                    return (
                      <tr key={project.name}>
                        <td>{project.role}</td>
                        <td>
                          <p> {project.description}</p>

                          <ul className="flex! flex-wrap! gap-3!">
                            {project.tags.map((tag) => (
                              <li key={tag} className="nes-badge w-auto!">
                                <span className="is-primary w-auto! static!">
                                  {tag}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </main>
  );
}
