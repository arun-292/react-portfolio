const Educations: React.FC = () => {
  return (
    <section id="education" className="page-section">
      <div className="container">
        <h2 className="text-center mt-0">Education</h2>
        <hr className="divider my-4" />
        <div className="text-center">
          <ul className="list-group">
            <li className="list-group-item list-group-item-secondary">
              <strong>Computer Engineering (2017 - 2021)</strong>
              <br />G H Patel college of Engineering and Technology-VVNagar
            </li>
            <li className="list-group-item list-group-item-primary">
              <strong>H.S.C (2015 - 17)</strong>
              <br />
              Delta Science School-Upleta
            </li>
            <li className="list-group-item list-group-item-secondary">
              <strong>S.S.C (2014 - 15)</strong>
              <br />
              Shri Parishram Vidhyalaya-Upleta
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Educations;
