import { useState } from "react";
import axios from 'axios';
import Joke from './components/joke';
import { ChakraProvider, Container, Center, Heading  } from '@chakra-ui/react';

const BASE_URL = 'https://api.chucknorris.io/jokes';

const App = () => {
	const [joke, setJoke] = useState('');

	let getJoke = async() => {
		let response = await axios(`${BASE_URL}/random`);
		let data = response.data.value;
		setJoke(data);
	};
	return (
		<ChakraProvider>
			<Container>
				<Center marginTop={ 10 }>
					<Heading>Chuck Norris Jokes :: API</Heading>
				</Center>

				<Joke joke={ joke } />
			</Container>
		</ChakraProvider>
	);
};


export default App;
