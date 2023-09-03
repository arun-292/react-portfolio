import { SKILLS } from "../../utils/constants";
import { getClassName } from "../../utils/utilityFunctions";

const Skills: React.FC = () => {
  return (
    <section className="page-section" id="skills">
      <div className="container">
        <h2 className="text-center mt-0">Skills</h2>
        <hr className="divider my-4" />
        <div className="row pb-3">
          {SKILLS.map((skill) => {
            return (
              <div
                key={skill.skillName}
                className="col-lg-3 col-md-4 mb-4 mb-lg-0"
              >
                <div className="card rounded shadow-sm border-1 mb-2">
                  <div className="card-body p-5">
                    <h5>{skill.skillName}</h5>
                    <div className="progress rounded-pill">
                      <div
                        role="progressbar"
                        style={{ width: `${skill.progress}%` }}
                        className={`${getClassName(
                          skill.progress
                        )} progress-bar rounded-pill`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
