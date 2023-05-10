import { Link } from "react-router-dom";
import img from '../assets/images/login/login.svg'
import { FaFacebook,FaGoogle } from 'react-icons/fa';

const SignUp = () => {
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
    }
    return (
        <div className="hero mt-4 lg:mt-16">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <div className="text-center lg:w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl lg:w-1/2 bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Sign Up</h1>
              <form onSubmit={handleSignUp} action="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
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
                    type="text"
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
                    className="bg-orange-600 px-4 py-2 cursor-pointer rounded-md mr-5 text-white font-semibold"
                    type="submit"
                    value="SignUp"

                  />
                </div>
              </form>
            </div>
            <p className="text-center -mt-4">Or Sign In With</p>
            <div className="text-center my-4">
              <button className="mr-2 bg-stone-200 p-2 rounded-full text-blue-500 text-xl"><FaFacebook/></button>
              <button className="mr-2 bg-stone-200 p-2 text-[#ea4335] rounded-full text-xl "><FaGoogle/></button>
            </div>
              <p className="text-center mb-4" >Have an account?<Link to='/login' className="text-orange-600 font-bold">Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;