import Image from "next/image";
import Link from "next/link";
import { Company } from "../AboutCard/AboutCard";
import { ProjectExperience } from "../ProjectExperience/ProjectExperience";

const ExperienceCard = (props: Company) => {
  const { name, type, startDate, endDate, iconUrl, href, projects } = props;
  return (
    <article className="rounded-md p-6  dark:shadow-pink-300">
      <div className="flex">
        <div className="w-24 h-24 relative flex shrink-0 mr-4">
          <Link href={href} target="_blank">
            <Image src={iconUrl} alt={`${name} logo`} fill sizes="100%" />
          </Link>
        </div>
        <div className="flex-col">
          <h3 className="text-lg">
            <Link href={href} target="_blank" className="text-purple-500">
              {name}.
            </Link>
          </h3>
          <span className="block"> {type}.</span>
          <time>
            {startDate} - {endDate || "Current"}
          </time>
        </div>
      </div>
      {projects.map((project, index) => {
        return (
          <ProjectExperience
            key={`${name}-${index}`}
            name={project.name}
            role={project.role}
            description={project.description}
            iconUrl={project.iconUrl}
            tags={project.tags}
          />
        );
      })}
    </article>
  );
};

export { ExperienceCard };
