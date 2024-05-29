import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUserThunk } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkLoggedIn } from "../../utils/tokenUtils";

const Home = () => {
  const token = useSelector((state) => state.auth.loginResponse);
  const loginStatus = token
    ? checkLoggedIn(token.exp)
    : { isLoggedIn: false, timeRemaining: 0 };
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
    if (loginStatus.isLoggedIn) {
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
