import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import UserLogo from '../UserLogo';

const UserList = () => {
	const [userlist, setUserlist] = useState([]);
	const [refresh, setRefresh] = useState(false);
	console.log(userlist);
	const colors = [
		'#FF0000',
		'#FFFF00',
		'#008000',
		'#0000FF',
		'#FF00FF',
		'#000080',
		'#800080',
	];

	const deleteHandler = async (email) => {
		// console.log(user.email);

		if (window.confirm('Are you sure')) {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const { data } = await axios.delete(
				`http://3.6.93.159:7853/machstatz/delete_existing_user?email=${email}`,
				config
			);
			console.log(data);
			setRefresh(!refresh);
		}
	};

	const fetch = async () => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.get(
			'http://3.6.93.159:7853/machstatz/get_all_users',
			config
		);
		setUserlist(data);
	};

	useEffect(async () => {
		fetch();
	}, [refresh]);

	return (
		<div className='grid-container'>
			{userlist.map((user, i) => (
				<div className='grid-item' key={i}>
					<div className='user-name'>
						<UserLogo user={user} />
						{/* <div className="user-logo">{setBg}</div> */}
						<div className='username'>
							{user.fist_name} {user.last_name}
						</div>
					</div>
					<div className='User-Icons'>
						<button className='pen-icon'>
							<FontAwesomeIcon icon={faPen} />
						</button>
						&nbsp;
						<button
							className='trash-icon'
							onClick={() => deleteHandler(user.email)}
						>
							<FontAwesomeIcon icon={faTrash} />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default UserList;
