import twitterIcon from "../../assets/img/twitter.png";
import instaIcon from "../../assets/img/instagram.png";
import facebookIcon from "../../assets/img/facebook.png";
import linkedinIcon from "../../assets/img/linkedin.png";

const Contacts: React.FC = () => {
  return (
    <section id="contact" className="page-section">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider my-4" />
            <p className="text-muted mb-5">Available</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center mb-lg-0">
            <i className="fa fa-phone fa-3x mb-3 text-muted"></i>
            <div>+91 99984 76302</div>
          </div>
          <div className="col-lg-4 ml-auto">
            <a href="https://www.instagram.com/arun_solanki_292/">
              <img
                className="m-1"
                src={instaIcon}
                width="60rem"
                height="60rem"
              />
            </a>
            <a href="https://www.facebook.com/akash.solanki.96155669/">
              <img
                className="m-1"
                src={facebookIcon}
                width="90rem"
                height="60rem"
              />
            </a>
            <a href="https://www.linkedin.com/in/arun-solanki-2247b9169/">
              <img
                className="m-1"
                src={linkedinIcon}
                width="60rem"
                height="60rem"
              />
            </a>
            <a href="https://twitter.com/akashsolanki292">
              <img
                className="m-2"
                src={twitterIcon}
                width="60rem"
                height="60rem"
              />
            </a>
          </div>

          <div className="col-lg-4 mr-auto text-center">
            <i className="fa fa-envelope fa-3x mb-3 text-muted"></i>
            <a className="d-block" href="mailto:akashsolanki292@gmail.com">
              akashsolanki292@gmail.com
            </a>
          </div>
        </div>
        <div className="row"></div>
      </div>
    </section>
  );
};

export default Contacts;
