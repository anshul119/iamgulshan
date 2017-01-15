import React from 'react';
import { Link } from 'react-router';
import aboutData from '../data/about';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<header>
					<div className="logo">
						<Link to="/"><img src={aboutData.logo} /></Link>
					</div>
					<nav className="menu">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</nav>
					<div className="social">
						<ul>
							<li>
								<a href={aboutData.social.facebook} target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
							</li>
							<li>
								<a href={aboutData.social.twitter} target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
							</li>
							<li>
								<a href={aboutData.social.behance} target="_blank"><i className="fa fa-behance fa-lg"></i></a>
							</li>
						</ul>
					</div>
				</header>
			</div>
		);
	}
}