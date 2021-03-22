import React from 'react';
import { Button } from "@chakra-ui/react";

import './index.css';

function Card({ image, course, startDate, landingPageLink, expired }) {
	console.log(expired)
	return (
		<a href={!expired && landingPageLink} target="_blank">
			<div className="card">
				<div className="thumbnail">
					<img src={image} alt="course" />
				</div>
				<div className="text">
					<h4>{course}</h4>
					<p>Início: {startDate}</p>
				</div>
				<div className="action">
					{!expired && <Button
						colorScheme="green"
						size="lg"
						variant="outline"
						width="100%"
					>Inscrições abertas</Button>}

					{expired && <Button
						colorScheme="green"
						size="lg"
						variant="outline"
						width="100%"
					>Avise-me</Button>}
				</div>
			</div>
		</a>
	);
}

export default Card;
