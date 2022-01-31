import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import '../CreateWorkout/CreateWorkout.css';

function CreateWorkout(props) {
	const initialState = {
		name: '',
		exercises: '',
	};
	const [formState, setFormState] = useState(initialState);
	const [toDashboard, setToDashboard] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);

		axios
			.post('https://flex-five.herokuapp.com/api/log', {
				...formState,
				date: new Date().toDateString().slice(4, 10),
			})
			.then(function (response) {
				setToDashboard(true);
			})
			.catch(function (error) {
				console.log(error);
			});

		setFormState(initialState);
	};

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	if (toDashboard === true) {
		return <Navigate to='/mydashboard' />;
	}

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<h2>Add Custom Workout</h2>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					id='name'
					onChange={handleChange}
					value={formState.name}
					placeholder='Mountain Climbers'
				/>

				<label htmlFor='date'> Date Completed:</label>
				<input
					type='date'
					id='date'
					onChange={handleChange}
					value={formState.date}
				/>

				<label htmlFor='exercises'>Workout Notes:</label>
				<textarea
					placeholder='Notes'
					id='exercises'
					cols='40'
					rows='10'
					onChange={handleChange}
					value={formState.exercises}></textarea>
				<button className='submit-btn'> Submit</button>
			</form>
		</main>
	);
}

export default CreateWorkout;
