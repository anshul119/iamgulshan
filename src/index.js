import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes';
import Style from './style/all.scss';

window.onload = () => {
	ReactDOM.render(<AppRoutes/>, document.getElementById('root'));
};