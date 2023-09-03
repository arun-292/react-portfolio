import { Projects } from "../../utils/interfaces";
import { getImage } from "../../utils/utilityFunctions";

interface Props {
  project: Projects;
  key: string;
}

const ProjectCard: React.FC<Props> = ({ project, key }: Props) => {
  return (
    <div
      className="card rounded shadow-sm border-1 m-2"
      style={{ maxWidth: "18rem", minWidth: "18rem" }}
      key={key}
    >
      <div className="card-body p-3">
        <img className="card-img-top" src={getImage(project.imageId)} alt="" />
        <div className="card-body">
          <h5 className="card-title">{project?.projectName}</h5>
          <p className="card-text">{project?.description}</p>
          <p className="card-text">
            <strong>Skill required: {project?.skills}</strong>
          </p>
          <a href={project?.url} className="btn btn-primary" target="_blank">
            Click to see project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
