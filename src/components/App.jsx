import './App.css';

import { useState } from 'react';
import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';

export function App() {
	const [results, setResults] = useState();
	function onSearchSubmit(query) {
		// Search for the users's query.
		// TODO: render the results, instead of logging them to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the API! Once we've built out
		// our UI, we need to make real requests!
		// @see: ./src/uitls/api.js
		searchArtworks(query).then((json) => {
			console.log(json);
			setResults(json.data);
		});
	}

	const resultsEl = results?.map((result) => (
		<li key={result.id}>
			<h2>{result.title}</h2>
			<p>{result.artist_title}</p>
		</li>
	));

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			{results?.length > 0 && <ul>{resultsEl}</ul>}
			<Footer />
		</div>
	);
}
