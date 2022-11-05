import { Link } from "react-router-dom";
import NotFoundImg from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={NotFoundImg} alt="not found" />
        <h2>404</h2>
        <p>Page Not Found</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
