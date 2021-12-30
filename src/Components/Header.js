import React from "react";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<>
			<Navbar expand="lg">
				<Container>
					<Navbar.Brand href="/" className="logo">
						<h1 className="logo">
							Kusama<spa>Cash</spa>
						</h1>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="customNav"
					>
						<Nav className="">
							<NavLink to="/">Home</NavLink>
							<NavLink to="/Contact">Contact</NavLink>
							<NavLink to="/About">About</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
