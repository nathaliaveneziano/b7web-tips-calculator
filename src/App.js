import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

const Label = styled.label`
	width: 25%;
`;

const Span = styled.span`
	display: inline-block;
	width: 100%;
`;

const Input = styled.input`
	width: 90%;
	padding: 10px;
	margin-bottom: 32px;
`;

const HR = styled.hr`
	width: 25%;
`;

const P = styled.p`
	font-size: 20px;
	text-transform: uppercase;
`;

const SpanP = styled(Span)`
	margin-bottom: 10px;

  ${props => props.total && 'font-weight: bold; font-size: 32px;'}
`;

function App() {
	const [value, setValue] = useState(0);
	const [tips, setTips] = useState(10);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Calculadora de Gorjeta</h1>
				<Label htmlFor="value-input">
					<Span>Quando deu a conta?</Span>
					<Input
						type="number"
						id="value-input"
						value={value}
						onChange={(e) => setValue(parseInt(e.target.value))}
					/>
				</Label>
				<Label htmlFor="tips-input">
					<Span>Qual a porcentagem de gorjeta?</Span>
					<Input
						type="number"
						id="tips-input"
						value={tips}
						onChange={(e) => setTips(parseInt(e.target.value))}
					/>
				</Label>
				{value > 0 && (
          <>
            <HR />
						<P>
							<SpanP>{`Valor da conta: R$ ${value.toFixed(2)}`}</SpanP>
							<SpanP>{`Valor da gorjeta (${tips}%): R$ ${(
								value *
								(tips / 100)
							).toFixed(2)}`}</SpanP>
							<br />
							<SpanP total>{`Valor Total: R$ ${(
								value +
								value * (tips / 100)
							).toFixed(2)}`}</SpanP>
						</P>
					</>
				)}
			</header>
		</div>
	);
}

export default App;
