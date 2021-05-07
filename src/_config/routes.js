import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Course from '../pages/Course';
import CourseNew from '../pages/CourseNew';
import NotFound from '../pages/NotFound';

import ThankyouPage from '../pages/ThankyouPage';

export default function Routes() {
	return (
		<BrowserRouter>

			<Switch>

				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/404" component={NotFound} />

				<Route exact path="/:slug">
					<Course />
				</Route>

				<Route exact path="/new/:slug">
					<CourseNew />
				</Route>

				<Route exact path="/obrigado/:slug">
					<ThankyouPage />
				</Route>

				<Route exact path="/cursos/extensao/cursos-de-atualizacao/:slug">
					<Course />
				</Route>

			</Switch>

		</BrowserRouter>
	)
}
