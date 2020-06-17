import React from "react";
import { Fragment } from 'react';
import {
	Navbar,
	Container,
	NavbarBrand
} from 'reactstrap'

function Footer() {
	return (
		<Fragment>
			<div className="fixed-bottom">
				<Navbar color="dark" dark>
					<Container>
						<NavbarBrand>Copyright &copy; 2020</NavbarBrand>
					</Container>
				</Navbar>
			</div>
		</Fragment>
	);
}

export default Footer;
