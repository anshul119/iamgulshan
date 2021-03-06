import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import router from './router';
import NotFoundPage from './components/NotFound';

const app = new Express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(Express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
	match(
		{routes: router, location: req.url},
		(err, redirectLocation, renderProps) => {
			if(err) {
				return res.status(500).send(err.message);
			}

			if (redirectLocation) {
				return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
			}

			let markup;
			if(renderProps) {
				markup = renderToString(<RouterContext {...renderProps}/>);
			}
			else {
				markup = renderToString(<NotFoundPage/>);
				res.status(404);
			}

			return res.render('index.ejs', {markup: markup});
		}
	);
});

const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';

app.listen(port, err => {
	if (err) {
		return console.error(err);
	}
	console.info(`Server running on http://localhost:${port} [${env}]`);
});