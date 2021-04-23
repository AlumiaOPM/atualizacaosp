import React from 'react';
import { Link } from 'react-router-dom';

import Provider from '../../components/Provider';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

import { useQuery } from '../../hooks/';

import './index.css';

const NotFound = (props) => {
	const query = useQuery();

	return (
		<div className="notFound">
			<Provider>

				<div className="notFound-container">
					<h3>404 página não encontrada</h3>
					<h2>Nenhuma página encontrada para <code>{`/${query.get("query")}`}</code></h2>

					<Link to="/">
						<Button
							colorScheme="green"
							margin="40px auto"
						>
							<ArrowBackIcon
								m="2"
							/>
							Conheça nossos cursos
						</Button>
					</Link>
				</div>

			</Provider>
		</div>
	);
}

export default NotFound;
