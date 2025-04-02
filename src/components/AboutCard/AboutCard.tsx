import { ExperienceCard } from "../ExperienceCard/ExperienceCard";

export type ProjectExperience = {
  name: string;
  role: string;
  description: string;
  tags: string[];
  iconUrl: string;
};

export type Company = {
  name: string;
  type: string;
  startDate: string;
  endDate?: string;
  iconUrl: string;
  href: string;
  projects: ProjectExperience[];
};

const AboutCard = ({ companies }: { companies: Company[] }) => {
  return (
    <section>
      <p className="nes-container is-dark with-title">
        I’m a passionate Senior Web Developer with over 5 years of experience
        using Web Development technologies. My passion for reading and learning
        about AI, programming, and personal growth keeps me up-to-date with
        industry trends and fuels my drive to innovate and excel.
      </p>
      <h2 className="font-bold text-2xl mt-6 mb-4 sm:text-3xl ">Career Path</h2>
      <ul>
        {companies.map(
          (
            { name, type, startDate, endDate, iconUrl, href, projects },
            index
          ) => {
            return (
              <li key={`${name}-${index}`}>
                <ExperienceCard
                  name={name}
                  type={type}
                  startDate={startDate}
                  endDate={endDate}
                  iconUrl={iconUrl}
                  href={href}
                  projects={projects}
                />
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export { AboutCard };
