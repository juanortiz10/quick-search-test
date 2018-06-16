import React, { Component } from 'react';

import './styles.scss';

class NavBar extends Component {
	render() {
		return (
			<div className="navbar">
				<div>
					<span className="navbar--title">Recipe Finder</span>
				</div>
				<div>
					<span className="navbar--section-label">Home</span>
				</div>
			</div>
		);
	}
}

export default NavBar;
