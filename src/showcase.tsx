import { useEffect, useState } from "react";

const Projects = ({ type, projects }: PropProjectType) => (
  <div className='mt-1'>
    <div className='card card-bordered shadow-lg'>
      <div className='card-body'>
        <h2 className='text-white text-2xl font-bold	card-title mb-0'>{type}</h2>
        {projects
          .filter((project) => project.type === type)
          .sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
              return -1;
            }
            if (b.title.toLowerCase() > a.title.toLowerCase()) {
              return 1;
            }
            return 0;
          })
          .map((project) => (
            <div key={project.title} className='mt-4'>
              <a className='text-blue text-lg' href={project.url}>
                {project.title}
              </a>
              <p className='text-sm font-sans'>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  </div>
);

const Showcase = () => {
  const [projects, setProject] = useState<Project[]>([]);
  const [protectType, setProjectType] = useState("code");

  useEffect(() => {
    const fetchData = async () => {
      const result: ProjectFile = await (await fetch("projects.json")).json();
      setProject(result?.projects ?? []);
    };

    fetchData();
  }, []);

  const tabs = Array.from(new Set(projects.map((p) => p.type)));

  return (
    <div id=''>
      <div className='tabs tabs-boxed'>
        {tabs.map((t, i) => (
          <div
            role='button'
            key={t}
            className={`tab tab-lg  ${protectType === t ? "tab-active" : ""}`}
            onKeyPress={() => setProjectType(t)}
            onClick={() => setProjectType(t)}
            tabIndex={0 - i}>
            {t}
          </div>
        ))}
      </div>
      <Projects type={protectType} projects={projects} />
    </div>
  );
};

export default Showcase;
