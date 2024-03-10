import "./ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="card__wrapper--nav">
        <section className="section__menu">
          <h3>OJ! NÅGOT GICK FEL!</h3>
          <div className="line__break"></div>
          <Link className="link__button" to="/">
            Tillbaks till AirBean
          </Link>
        </section>
      </div>
    </>
  );
};
export default ErrorPage;
