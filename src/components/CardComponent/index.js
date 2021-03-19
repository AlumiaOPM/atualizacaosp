import React from 'react';
import { Button } from "@chakra-ui/react";

import './index.css';

function CardComponent(props) {
	return (
		<div className="card">
			<div className="thumbnail">
				<img src="https://atualizacaosp.espm.br/wp-content/uploads/2020/07/sul-ferias-fotografia-com-smartphone-1.jpg" alt="course" />
			</div>
			<div className="text">
				<h4>A produção de Vídeo Marketing com Smartphones</h4>
				<p>Início: 22/03/2021</p>
			</div>
			<div className="action">
				<Button>Inscrições abertas</Button>
			</div>
		</div>
	);
}

export default CardComponent;
