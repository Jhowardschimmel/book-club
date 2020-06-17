
import React from 'react';
import { Fragment } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

export default class Navigation extends React.Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return <Fragment>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">Book Club</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/calendar">Calendar</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/library">Library</NavLink>
						</NavItem>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Members
                </DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									Roster
                  </DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									Invite
                  </DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>

						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Books
                </DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>
									Reading List
                  </DropdownItem>
								<DropdownItem divider />
								<DropdownItem >
									Nominate
                  </DropdownItem>
								<DropdownItem divider />
								<DropdownItem>
									Search
                  </DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</Fragment>
	}
}