import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFound';
import projects from '../data/projects';

export default class Project extends React.Component {
	render() {
		const id = this.props.params.id;
		const project = projects.filter((project) => project.id === id)[0];
		const project_images = project.images;
		if (!project) {
			return <NotFoundPage/>;
		}
		return (
			<div className="project">
				<div className="project-head">
					<h1 className="heading">{project.name}</h1>
					<p className="description">{project.description}</p>
				</div>
				{project_images.map((image, i) => <img key={i} src={image.src} alt={image.alt} className="project-image" />)}
				<div className="navigate-back">
					<Link to="/">Back to the index</Link>
				</div>
			</div>
		);
	}
}