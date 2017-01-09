import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default class IndexPage extends React.Component {
	render() {
		return (
			<div className="home">
				<div className="flex-grid">
					{projects.map(projectsData => <ProjectCard key={projectsData.id} {...projectsData} />)}
				</div>
			</div>
		);
	}
}