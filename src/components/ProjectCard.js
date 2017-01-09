import React from 'react';
import { Link } from 'react-router';

export default class ProjectCard extends React.Component {
	render() {
		var style = {
			coverImage: {
				'backgroundImage': 'url(' + this.props.thumbnail + ')'
			}
		};

		return (
			<div className="col">
				<Link to={`/projects/${this.props.id}`}>
					<div className="portfolio-card">
						<div className="cover" style={style.coverImage}></div>
						<div className="details">
							<h2 className="name">{this.props.name}</h2>
							<p className="caption">{this.props.caption}</p>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}