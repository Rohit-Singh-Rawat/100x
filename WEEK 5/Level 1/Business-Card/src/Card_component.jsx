import './Card_component.css';

function Card_component(props) {
	return (
		<div className='card'>
			<h3 className='name'>{props.name}</h3>
			<h5 className='designation'>{props.designation}</h5>
			<div className='info'>
				<h4>About</h4>
				<p className='description'>{props.description}</p>
				<h4 className='interests'>Interests</h4>
				<ul>
					{props.interests.map((interest) => {
						return <li key={interest}>{interest}</li>;
					})}
				</ul>
			</div>
			<div className='socialLinks'>
				{Object.keys(props.socialLinks).map((kez) => {
					return (
						<button key={kez}>
							<a
								href={props.socialLinks[kez]}
								target='_blank'
								rel='noopener noreferrer'
							>
								{kez}
							</a>
						</button>
					);
				})}
			</div>
		</div>
	);
}
export default Card_component;
