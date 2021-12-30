import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
	return (
		<>
			<header>
				<section className="container main-hero-container">
					<div className="row">
						<div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
							<h1 className="display-2">
								the Accept
								<span className="cont_2">Kusama Cash </span>
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
			<div className="container">
				<h2>
					A community-curated list of
					<h1> merchants that accept </h1>
					<h1>
						<a href="/">Kusama Cash, </a>
					</h1>
					<h2>a peer-to-peer electronic cash system.</h2>
				</h2>
			</div> 

			button
			 <div>
				<button className="ui">
					<p> Browse the entire list by category</p>
				</button>
			</div>
		</>
	);
}

<>
	<header>
		<section className="container main-hero-container">
			<div className="row">
				<div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
					<h1 className="display-2">
						Cryptocurrency Basics:
						<br /> A Beginner’s Guide
					</h1>
					<p className="main-hero-para">
						Cryptocurrency has been called everything from the money
						of the future to an extremely risky asset that shouldn’t
						be touched with a 10-foot pole.
					</p>
				</div>
				{/*  --------------- main header right side--------------  */}
				<div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
					<img
						src="./img/bitcoin.png"
						alt="heroimg"
						className="img-fluid"
					/>
					{/* <img
                src="./img/Blockchain_Bitcoin.jpg"
                alt="heroimg4"
                className="img-fluid"
              /> */}
				</div>
			</div>
		</section>
	</header>
</>;
export default Home;
