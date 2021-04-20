import React from 'react';
import { useLocation } from 'react-router-dom';

//Custom Hook
function useQuery() {
	return new URLSearchParams(useLocation().search);
};

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
