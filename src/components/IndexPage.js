import React from 'react';
import PortfolioCard from './PortfolioCard';
import portfolio from '../data/portfolio';

export default class IndexPage extends React.Component {
	render() {
		return (
			<div className="home">
				<div className="portfolio-selector">
					{portfolio.map(portfolioData => <PortfolioCard key={portfolioData.id} {...portfolioData} />)}
				</div>
			</div>
		);
	}
}