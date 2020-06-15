import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

const Navigation = (props) => {
	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Book Club</NavbarBrand>
				<Nav>
					<NavItem>
                      <NavLink href="#">Currently Reading</NavLink>
					</NavItem>
				</Nav>
			</Navbar>

		</div>
	)
}

export default Navigation;