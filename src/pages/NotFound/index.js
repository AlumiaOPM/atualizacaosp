import React from 'react';
import { useQuery } from '../../hooks/';

const NotFound = (props) => {
	const query = useQuery();

	return (
		<div>
			<div>
				<h3>404 página não encontrada</h3>
				<h2>Nenhuma página encontrada para <code>{`/${query.get("query")}`}</code></h2>
			</div>
		</div>
	);
}

export default NotFound;
