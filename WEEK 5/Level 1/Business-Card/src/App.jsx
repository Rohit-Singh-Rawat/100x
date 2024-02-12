import { useState } from 'react';
import './App.css';
import Card_component from './Card_component';

function App() {
  const [cards, setCards] = useState([
		{
			id: 1,
			name: 'Alice',
			designation: 'Software Engineer',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			socialLinks: {
				twitter: 'https://twitter.com',
				linkedin: 'https://linkedin.com/in',
				github: 'https://github.com',
			},
			interests: ['Programming', 'Reading', 'Traveling'],
		},
		{
			id: 2,
			name: 'Bob',
			designation: 'Product Manager',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			socialLinks: {
				twitter: 'https://twitter.com',
				linkedin: 'https://linkedin.com',
			},
			interests: ['Sports', 'Music', 'Cooking'],
		},
	]);

  return cards.map((card) => (
    <Card_component
      key={card.id}
      name={card.name}
      designation={card.designation}
      description={card.description}
      interests={card.interests}
      socialLinks={card.socialLinks}
      
    />
  ));
}

export default App;
