import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import form_bg from "../assets/form_bg.png";

const Signup = () => {
	return (
		<div className="d-flex flex-column align-items-center justify-content-center text-size  ">
            
			<div className="form-parent border p-4">
				<div class="form-paragraph alert alert-success">
					<p>
						Let's learn, share & inspire each other with our passion for
						computer engineering. Sign up now
					</p>
				</div>

				<div className="d-flex justify-content-between px-5">
					<p className="fw-bold display-6 ">Create Account</p>
					<p>Already have an account? <a className="text-primary">Sign In</a> </p>
				</div>

				<div class="form-container text-size ">
					<div class="form-section-1 ">
						<form className="">
							<div class="input-group  ">
								<input
									type="text"
									class="form-control p-4 text-size "
									placeholder="First Name"
								/>
								<input
									type="text"
									class="form-control p-4 text-size"
									placeholder="Last Name"
								/>
							</div>
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
							<input
								type="text"
								class="form-control p-4 text-size"
								placeholder="Confirm Password"
							/>
						</form>
                        <button className="btn form-btn text-size btn-primary rounded-pill py-3 my-5">
							
							Create Account
						</button>
						<button className="btn py-3 my-3 form-btn text-size btn-transparent border fw-bold rounded">
							<span className="px-2">
								<FaFacebook />
							</span>
							Sign up with Facebook
						</button>
						<button className="btn py-3 form-btn text-size btn-transparent border fw-bold rounded">
							<span className="px-2">
								<FcGoogle />
							</span>
							Sign up with Google
						</button>
					</div>

					<div class="form-section-2  d-flex align-items-center justify-content-center flex-column">
						<img src={form_bg} alt="h" />
                        <p className="pt-5 px-4 small">By signing up, you agree to our Terms & conditions, Privacy policy</p>
					</div>

					<div>
						
						
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
