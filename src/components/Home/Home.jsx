import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home page</div>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/sign-up">
        <button>SignUp</button>
      </Link>
    </>
  );
};

export default Home;
