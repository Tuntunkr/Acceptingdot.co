import React from "react";
import Button from "./Button";

function Middle() {
	return (
		<>
			<header className="abc">
				<section className="container main-hero-container">
					<div className="row">
						{/*  --------------- main header right side--------------  */}
						<div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
							<img
								src="./piggy-bank.png"
								alt="heroimg"
								className="img-fluid"
							/>
						</div>
						<div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
							<h1 className="text_1">
								A community-curated list of merchants that
								accept Kusama Cash, a peer-to-peer electronic
								cash system.
							</h1>
						</div>
					</div>
				</section>
				<Button />
			</header>
		</>
	);
}

export default Middle;
