import { PROJECTS } from "../../utils/constants";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects: React.FC = () => {
  return (
    <section className="page-section" id="project">
      <div className="container">
        <h2 className="text-center mt-0">Projects</h2>
        <hr className="divider my-4" />
        <div className="row justify-content-center">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.projectName} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
