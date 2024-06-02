import React, { useState, useEffect } from 'react';

function RandomQuote() {
	const [content, setQuote] = useState('');
	const [author, setAuthor] = useState('');

	const loadQuote = async () => {
		const response = await fetch('https://api.quotable.io/random');
		const data = await response.json();

		setQuote(data.content);
		setAuthor(data.author);
	};

	useEffect(() => {
		loadQuote();
	}, []);

	return (
		<>
			<div className='quote__container'>
				<p>{content}</p>
				<p>~ {author}</p>
				<button onClick={loadQuote}>New Quote</button>
			</div>
		</>
	);
}

export default RandomQuote;
