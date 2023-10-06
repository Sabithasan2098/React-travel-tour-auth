import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import NavbarTwo from "../Navbar/NavbarTwo";

const Login = () => {
    const {logIn} = useContext(AuthContext)

    const handleLogin = e =>{
       e.preventDefault()
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email,password);
        
        logIn(email,password)
        .then(result=>{
            console.log(result);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }


  return (
   <div>
    <NavbarTwo></NavbarTwo>
     <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="p-8">Don't have an account <Link to={"/register"} className="underline text-warning"> Create an account</Link></p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login;
