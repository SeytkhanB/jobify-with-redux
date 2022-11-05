import Main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Squid edison bulb twee sus. Twee raclette esse sriracha, roof
              party excepteur copper mug gluten-free helvetica freegan scenester
              tempor. Sriracha fanny pack adipisicing authentic laboris keytar
              ut williamsburg mixtape poke ut biodiesel literally.{" "}
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={Main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};
export default Landing;
