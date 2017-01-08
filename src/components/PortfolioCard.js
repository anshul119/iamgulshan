import React from 'react';
import { Link } from 'react-router';

export default class PortfolioCard extends React.Component {
	render() {
		return (
			<div className="col">
				<Link to={`/portfolio/${this.props.id}`}>
					<div className="portfolio-card">
						<img src={this.props.thumbnail} alt={this.props.subtitle}/>
						<h2 className="name">{this.props.name}</h2>
						<p className="subtitle">{this.props.subtitle}</p>
					</div>
				</Link>
			</div>
		);
	}
}