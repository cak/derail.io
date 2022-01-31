interface Project {
  title: string;
  url: string;
  description: string;
  type: ProjectType;
  languge: string;
}

interface PropProjectType {
  type: string;
  projects: Project[];
}

interface ProjectFile {
  projects: Project[];
}
