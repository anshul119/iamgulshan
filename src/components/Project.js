import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFound';
import portfolio from '../data/portfolio';

export default class Project extends React.Component {
	render() {
		const id = this.props.params.id;
		const project = portfolio.filter((project) => project.id === id)[0];
		const project_images = project.images;
		if (!project) {
			return <NotFoundPage/>;
		}
		return (
			<div className="project">
				<h1>{project.name}</h1>
				<p>{project.description}</p>
				{project_images.map((image, i) => <img key={i} src={image.src} alt={image.alt} />)}
				<div className="navigateBack">
					<Link to="/">« Back to the index</Link>
				</div>
			</div>
		);
	}
}