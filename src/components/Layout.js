import React from 'react';
import Header from './header';

export default class Layout extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<div className="content">{this.props.children}</div>
				<footer>
				</footer>
			</div>
		);
	}
}