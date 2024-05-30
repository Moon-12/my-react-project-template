import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const loginResponse = useSelector((state) => state.auth.loginResponse);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const loginUser = async () => {
  //     await dispatch(loginUserThunk());
  //   };
  //   loginUser();
  //   navigate("/landing-page");
  // }, [dispatch, navigate]);
  useEffect(() => {
    if (loginResponse.isLoggedIn) {
      navigate("/landing-page");
    } else navigate("/");
  }, []);
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
