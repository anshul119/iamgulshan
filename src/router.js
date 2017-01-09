import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import ProjectPage from './components/Project';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import NotFoundPage from './components/NotFound';

const routes = (
    <Route path="/" component={Layout}>
      <IndexRoute component={IndexPage}/>
      <Route path="projects/:id" component={ProjectPage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="contact" component={ContactPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;