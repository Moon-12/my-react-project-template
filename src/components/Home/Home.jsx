import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const loginUserThunk = async () => {
  //     await dispatch(loginUser());
  //   };
  //   loginUserThunk();
  //   navigate("/landing-page");
  // }, [dispatch]);

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
