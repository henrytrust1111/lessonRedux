import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { lessonLogin } from "../Redux/Features";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };
  const url = `https://trippyapiv1.onrender.com/trippy/api/signup`;

  const handleLogin = () => {
    if (data.email === "" || data.password === "")
      return alert("All fields are required");
    else {
      console.log("Logging in...");
      setLoading(true);
      axios
        .post(url, data)
        .then((response) => {
          console.log(response);
          setLoading(false);
          if (response.status === 201) {
            dispatch(lessonLogin(response.config.data));
          }
          nav("/Home");
        })
        .catch((error) => {
          console.log(error);
          console.log("Error Response:", error.response);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="w-[30%] w-[40%] h-screen">
          <div className="w-full h-[15%] flex items-center justify-center">
            {/* <img src={logo} alt="" className="" /> */}
          </div>
          <div className="w-full h-[30rem] bg-white flex flex-col items-center justify-between p-10 rounded-lg">
            <div className="w-full flex flex-col h-max items-center gap-2">
              <p className="text-[rgb(76,47,110)] text-xl font-bold">
                Welcome to ultimafinances.com
              </p>
              <p className="text-[rgb(65,80,118)] text-sm">
                Enter your data and access our platform
              </p>
            </div>
            <div className="w-full h-max flex flex-col gap-2">
              <p className="text-[rgb(65,80,118)] font-bold">firstName</p>
              <input
                type="text"
                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-500 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                placeholder="first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="w-full h-max flex flex-col gap-2">
              <p className="text-[rgb(65,80,118)] font-bold">lastName</p>
              <input
                type="text"
                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-500 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                placeholder="last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="w-full h-max flex flex-col gap-2">
              <p className="text-[rgb(65,80,118)] font-bold">Email</p>
              <input
                type="email"
                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-500 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full h-max flex flex-col gap-2">
              <p className="text-[rgb(65,80,118)] font-bold">Password</p>
              <input
                type="password"
                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-500 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-full h-max flex flex-col gap-2">
              <p className="text-[rgb(65,80,118)] font-bold">confirmPassword</p>
              <input
                type="password"
                className="w-full h-11 border border-gray-200 text-gray-500 placeholder:text-gray-500 placeholder:text-[15px] rounded pl-4 outline-gray-200"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="w-full h-max flex items-center gap-4">
              <input type="checkbox" name="" id="" className="w-4 h-4" />
              <p className="w-max flex items-center gap-10 text-[rgb(65,80,118)] font-bold">
                Remember me{" "}
                <Link
                  to={"/signup"}
                  className="text-[rgb(0,131,226)] cursor-pointer"
                >
                  Forgot Password
                </Link>
              </p>
            </div>

            <button
              style={{ marginTop: "40px" }}
              className="w-full py-4 bg-[#0083e2] text-white rounded text-sm"
              onClick={handleLogin}
            >
              {loading ? "Loading" : "Login"}
            </button>
          </div>
          <div className="w-full h-[10%] text-white flex items-center justify-center">
            <p>
              Already have an account?{" "}
              <span className=" text-white transition-all duration-75 hover:text-[rgb(0,131,226)] cursor-pointer" onClick={()=> nav("/Signin")}>
                Sign In here
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
