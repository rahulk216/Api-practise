import React, { useState } from 'react';
import axios from 'axios';

const UserAdd = () => {
	const [email, setEmail] = useState('');
	const [fist_name, setFist_name] = useState('');
	const [last_name, setLast_name] = useState('');
	const [pwd, setPwd] = useState('');
	const [username, setUsername] = useState('');

	const sendData = async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const { data } = await axios.post(
			'http://3.6.93.159:7853/machstatz/add_new_user',
			formData,
			config
		);
		if (data) {
			alert('new user added');
		}
	};

	const formHandler = () => {
		const formData = {
			email: email,
			fist_name,
			last_name,
			pwd,
			username,
		};
		console.log(formData);
		sendData(formData);
	};
	return (
		<div className='master-container'>
			<div className='form-container'>
				<h1>Add User</h1>
				<label for='fname'>First Name</label>
				<input
					type='text'
					id='fname'
					name='firstname'
					placeholder='Your name..'
					onChange={(e) => setFist_name(e.target.value)}
				/>

				<label for='lname'>Last Name</label>
				<input
					type='text'
					id='lname'
					name='lastname'
					placeholder='Your last name..'
					onChange={(e) => setLast_name(e.target.value)}
				/>

				<label for='lname'>Profiles</label>

				<select name='' id='' disabled>
					<option value=''></option>
				</select>

				<label for='lname'>Username</label>
				<input
					type='text'
					id='lname'
					name='lastname'
					placeholder='Your last name..'
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label for='lname'>Email Address</label>
				<input
					type='text'
					id='lname'
					name='lastname'
					placeholder='Your last name..'
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label for='lname'>Password</label>
				<input
					type='text'
					id='lname'
					name='lastname'
					placeholder='Your last name..'
					onChange={(e) => setPwd(e.target.value)}
				/>

				<button className='button' onClick={formHandler}>
					Add
				</button>
			</div>
		</div>
	);
};

export default UserAdd;
