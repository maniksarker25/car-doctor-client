import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { FaFacebook,FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {signIn,googleSignIn} = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
          const loggedUser = result.user;
          
          console.log(loggedUser)
          navigate(from,{replace:true})
          
        })
        .catch(error=>{
          const errorMessage = error.message;
          console.log(errorMessage)
        })
    }
    // google sign in 
    const handleGoogleSignIn = () =>{
      googleSignIn()
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser)
      })
      .catch(error=>{
        const errorMessage = error.message;
        console.log(errorMessage)
      })
    }


  return (
    <div className="hero mt-4 lg:mt-16">
      <div className="hero-content flex-col lg:flex-row gap-24">
        <div className="text-center lg:w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl lg:w-1/2 bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin} action="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="bg-orange-600 cursor-pointer px-4 py-2 rounded-md mr-5 text-white font-semibold"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
          <p className="text-center -mt-4">Or Sign In With</p>
          <div className="text-center my-4">
            <button className="mr-2 bg-stone-200 p-2 rounded-full text-blue-500 text-xl"><FaFacebook/></button>
            <button onClick={handleGoogleSignIn} className="mr-2 bg-stone-200 text-[#ea4335] p-2 rounded-full text-xl "><FaGoogle/></button>
          </div>
            <p className="text-center mb-4" >New to car doctor?<Link to='/signUp' className="text-orange-600 font-bold">SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
