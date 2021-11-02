import React from 'react';

const UserLogo = ({ user }) => {
	const color = 'blue';
	return (
		<div className='user-logo' style={{ backgroundColor: `${color}` }}>
			{user.fist_name.charAt(0).toUpperCase()}
		</div>
	);
};

export default UserLogo;
