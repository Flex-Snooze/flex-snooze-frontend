import React, { useState } from 'react';
import { useContext } from 'react';
import { WorkoutContext } from '../../workoutContext';
import axios from 'axios';

function CreateWorkout(props) {
	const initialState = {
		name: '',
		exercises: '',
		date: '',
	};

	const [formState, setFormState] = useState(initialState);

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);

		axios
			.post('http://localhost:4000/api/user/5', {
				...formState,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });

		console.log(event.target.value);
	};

	return (
		<main>
			<form onSubmit={handleSubmit}>
				<h2>Add Custom Workout</h2>
				<label htmlFor='name'>name:</label>
				<input
					type='text'
					id='name'
					onChange={handleChange}
					value={formState.name}
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
					id='exercises'
					cols='40'
					rows='10'
					onChange={handleChange}
					value={formState.exercises}></textarea>
				<button> Submit</button>
			</form>
		</main>
	);
}

export default CreateWorkout;
