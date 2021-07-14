import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Course from '../pages/Course';
import NotFound from '../pages/NotFound';

import PoliticaDePrivacidade from '../pages/PoliticaDePrivacidade';
import ThankyouPageNew from '../pages/ThankyouPageNew';

export default function Routes() {
	return (
		<BrowserRouter>

			<Switch>

				<Route exact path="/">
					<Home />
				</Route>
				
				<Route exact path="/404" component={NotFound} />
				<Route exact path="/politica-de-privacidade" component={PoliticaDePrivacidade} />

				<Route exact path="/:slug">
					<Course />
				</Route>

				<Route exact path="/obrigado/:slug">
					<ThankyouPageNew />
				</Route>

			</Switch>

		</BrowserRouter>
	)
}
