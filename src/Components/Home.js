import React from "react";
import Middle from "./Middle";



function Home() {
	return (
		<>
			<header>
				<section className="container main-hero-container">
					<div className="row">
						<div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
							<h1 className="display-2">
								The Accept
								<span className="cont_2"> Kusama Cash </span>
								initiative
							</h1>
						</div>
						{/*  --------------- main header right side--------------  */}
						<div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
							<img
								src="./image_processing.gif"
								alt="heroimg"
								className="img-fluid"
							/>
						</div>
					</div>
				</section>
			</header>
			<Middle/>
			
		
		</>
	);
}


export default Home;
