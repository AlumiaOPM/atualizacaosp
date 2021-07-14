import React from 'react';
import { Button } from "@chakra-ui/react";

import cardImage from '../../assets/card-bg.jpg';

import './index.css';

function Card({ image, course, startDate, landingPageLink, expired, openPopup, courseCode }) {
	
	return (
		<a href={!expired && landingPageLink} target="_blank">
			<div className="card">
				<div className="thumbnail">
					<img src={cardImage} alt="course" />
				</div>
				<div className="text">
					<h4>{course}</h4>
					<p>Início: {startDate}</p>
				</div>
				<div className="action">
					{!expired && <Button
						colorScheme="black"
						size="lg"
						variant="outline"
						width="100%"
						_hover={{
							background: "black",
							color: "white"
						}}
					>Inscrições abertas</Button>}

					{expired && <Button
						colorScheme="black"
						size="lg"
						variant="outline"
						width="100%"
						_hover={{
							background: "black",
							color: "white"
						}}
						onClick={() => openPopup(course, startDate, courseCode)}
					>Avise-me</Button>}
				</div>
			</div>
		</a>
	);
}

export default Card;
