import React from 'react';
import aboutData from '../data/about';

export default class AboutPage extends React.Component {
	render() {
		return (
			<div className="about">
				<h1 className="heading">about</h1>
				<p className="content">{aboutData.bio}</p>
			</div>
		);
	}
}