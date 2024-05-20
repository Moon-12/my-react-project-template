import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div>Login page</div>
      <Link to="/user">
        <button>Login</button>
      </Link>
    </>
  );
};

export default LoginPage;
