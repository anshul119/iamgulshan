import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<header>
					<div className="logo">
						<Link to="/"><h1>IAmGulshan</h1></Link>
					</div>
					<nav className="menu">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</nav>
				</header>
			</div>
		);
	}
}