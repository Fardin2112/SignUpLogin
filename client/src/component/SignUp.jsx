import "../assets/CSS/SignUp.css";
import { Link } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";

function SignUp() {
  return (
    <>
      <div className="signup">
        <div className="container">
          <h1 className="Signup-heading">Sign Up</h1>
          <div className="container-box">
            <form action="">
              <h3 className="user-name">Name</h3>
              <input type="text" placeholder="Your Name" />
              <h3>Email</h3>
              <input type="email" placeholder="Email" />
              <h3>Password</h3>
              <input type="password" placeholder="Password" />
            </form>
          </div>
          <label className="container-forget">
            <input type="checkbox" />
            <p>By accepting this agree with our term and condition</p>
          </label>
          <button className="sign-button">Sign Up</button>
          <div className="signup-using-g-ldn">
            <Link
              style={{ border: "2px solid black", backgroundColor: "blue" }}
            >
              <BiLogoGoogle
                style={{ width: "110px", height: "40px", color: "white" }}
              />
            </Link>
            <Link
              style={{ border: "2px solid black", backgroundColor: "blue" }}
            >
              <BiLogoLinkedin
                style={{ width: "110px", height: "40px", color: "white" }}
              />
            </Link>
          </div>
          <p className="already-login">
            Already Login <Link>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
