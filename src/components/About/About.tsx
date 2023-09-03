import { GoogleDriveImageId } from "../../utils/enums";
import { getImage } from "../../utils/utilityFunctions";

const About: React.FC = () => {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div
              style={{
                maxWidth: 200,
                maxHeight: 200,
                margin: "auto",
              }}
            >
              <img
                className="img-fluid rounded-circle mx-auto mb-5 shadow-sm"
                src={getImage(GoogleDriveImageId.PROFILE)}
                alt="profile"
              />
            </div>
            <hr className="divider light my-4" />
            <h4 className="text-white-50 mb-4">
              Passionate Entry-Level Full-Stack Developer having 2+ years of
              hands-on experience. Known for delivering unique experiences while
              complying with internal coding standards and technical
              requirements.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
