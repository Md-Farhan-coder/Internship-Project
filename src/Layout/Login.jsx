import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import form_bg from "../assets/form_bg.png";

const Login = () => {
  return (
    <div className='full bg-secondary bg-opacity-75 '>
    <div className=" full-child d-flex flex-column align-items-center justify-content-center text-size  ">
            
    <div className="form-parent border p-4 bg-light">
        <div class="form-paragraph alert alert-success">
            <p>
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now
            </p>
        </div>

        <div className="d-flex justify-content-between px-5 pt-5">
            <p className="fw-bold display-6 ">Create Account</p>
            <p>Don't have an account yet? <a className="text-primary">Create new for free!</a> </p>
        </div>

        <div class="form-container text-size ">
            <div class="form-section-1 ">
                <form className="">
                  
                    <input
                        type="text"
                        class="form-control p-4 text-size"
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        class="form-control p-4 text-size"
                        placeholder="Password"
                    />
                  
                </form>
                <button className="btn form-btn text-size btn-primary rounded-pill py-3 my-5">
                    
                   Sign In
                </button>
                <button className="btn py-3 my-3 form-btn text-size btn-transparent border fw-bold rounded">
                    <span className="px-2">
                        <FaFacebook />
                    </span>
                    Sign in with Facebook
                </button>
                <button className="btn py-3 form-btn text-size btn-transparent border fw-bold rounded">
                    <span className="px-2">
                        <FcGoogle />
                    </span>
                    Sign in with Google
                </button>
                <p className="fw-bold small text-center py-5"> Forgot Password?</p>
            </div>

            <div class="form-section-2  d-flex align-items-center justify-content-center flex-column">
                <img src={form_bg} alt="h" />
              
          </div>

            <div>
            </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login