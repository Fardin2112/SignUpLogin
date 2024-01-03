import {Link} from "react-router-dom"
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi"

function Login(){
    return(
        <>
      <div className="signup">
        <div className="container">
          <h1 className="Signup-heading">Login</h1>
          <div className="container-box">
            <form action="">
              {/* <h3 className="user-name">Name</h3>
              <input type="text" placeholder="Your Name" /> */}
              <h3>Email</h3>
              <input type="email" placeholder="Email" />
              <h3>Password</h3>
              <input type="password" placeholder="Password" />
            </form>
          </div>
          <label className="container-forget">
            {/* <input type="checkbox" /> */}
            <p>Already forget password <Link to="/forget">Forget password</Link></p>
          </label>
          <button className="sign-button">Log in</button>
          <div className="signup-using-g-ldn">
            <Link
              style={{ border: "1px solid black", backgroundColor: "#3b3bfc" , borderRadius:"5px" }}
            >
              <BiLogoGoogle
                style={{ width: "110px", height: "40px", color: "white" }}
              />
            </Link>
            <Link
              style={{ border: "1px solid black", backgroundColor: "#3b3bfc", borderRadius:"5px"  }}
            >
              <BiLogoLinkedin
                style={{ width: "110px", height: "40px", color: "white" }}
              />
            </Link>
          </div>
          {/* <p className="already-login">
            Already Login <Link>Login</Link>
          </p> */}
        </div>
      </div>
    </>
    )
}
export default Login