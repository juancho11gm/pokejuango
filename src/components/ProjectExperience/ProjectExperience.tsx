import Image from "next/image";
import "./ProjectExperience.module.css";

export type ProjectExperience = {
  name: string;
  role: string;
  description: string;
  tags: string[];
  iconUrl: string;
};

const ProjectExperience = ({
  name = "",
  role = "",
  description = "",
  iconUrl,
  tags = [],
}: ProjectExperience) => {
  const tagList = tags.map((tag) => (
    <li
      key={tag}
      className="bg-gray-200 rounded-md p-1 text-gray-700 dark:text-gray-300 dark:bg-gray-500"
    >
      {tag}
    </li>
  ));

  return (
    <div className={"col-span-2 pl-12 mt-4 sm:mt-6 project"}>
      <span className="icon">
        <Image
          alt="Icon"
          className="iconImage"
          src={iconUrl}
          width={100}
          height={100}
        />
      </span>
      <h4 className="font-bold">{name}</h4>
      <h5 className="text-gray-500">{role}</h5>
      <p className="mb-2 mt-2">{description}</p>
      <ul className="flex flex-wrap gap-2 sm:gap-4">{tagList}</ul>
    </div>
  );
};

export { ProjectExperience };
