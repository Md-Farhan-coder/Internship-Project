import React from "react";
import img from "../assets/Rectangle.png";
const Header = () => {
	return (
		<>
			<div className="header text-size " >
				<div  className="header-img "><img src={img} alt="header" className="img-fluid " /></div>
				<div className="header-text d-flex flex-column justify-content-start ">
					<h3 className="display-6 d-flex  justify-content-start fw-bold "> Computer Engineering</h3>
					<p className=" d-flex  justify-content-start ml-5"> 142,765 Computer Engineers follow this</p>
				</div>
			</div>
       
            	</>
	);
};



export default Header;
