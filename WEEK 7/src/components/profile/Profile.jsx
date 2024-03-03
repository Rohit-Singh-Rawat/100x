import React from 'react';
import photo from '../../assets/profileAssets/photo.jpg'
import './Profile.css'

function Profile() {
	return (
		<div className='profile'>
			<div>
				<div className='banner'></div>
				<div className='userPhoto'>
					<img
						src={photo}
						alt='photo'
					/>
				</div>
				<div className='userInfo'>
					<span className='name'>Rohit Singh</span>
					<span className='age'>20</span>
				</div>
				<div className='userPlace'>
					<span>India</span>
				</div>
			</div>
			<div className='extra'>
				<div className='social-container'>
					<div className='social'>
						<span className='quantity'>100k</span>
						<span className='parameter'>Followers</span>
					</div>
					<div className='social'>
						<span className='quantity'>500k</span>
						<span className='parameter'>Likes</span>
					</div>
					<div className='social'>
						<span className='quantity'>1.5k</span>
						<span className='parameter'>Photos</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
