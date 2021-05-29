import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import CourseNew from '../pages/CourseNew';
import NotFound from '../pages/NotFound';

import ThankyouPage from '../pages/ThankyouPage';
import ThankyouPageNew from '../pages/ThankyouPageNew';

export default function Routes() {
	return (
		<BrowserRouter>

			<Switch>

				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/404" component={NotFound} />

				<Route exact path="/:slug">
					<CourseNew />
				</Route>

				<Route exact path="/obrigado/:slug">
					<ThankyouPageNew />
				</Route>

				<Route exact path="/cursos/extensao/cursos-de-atualizacao/:slug">
					<CourseNew />
				</Route>

			</Switch>

		</BrowserRouter>
	)
}
