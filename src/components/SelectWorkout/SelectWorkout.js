import './SelectWorkout.css';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { WorkoutContext } from '../../workoutContext';
import axios from 'axios';

function SelectWorkout(props) {
	const { todayWorkout, setTodayWorkout } = useContext(WorkoutContext);
	const { finalWorkout, setFinalWorkout } = useContext(WorkoutContext);
	const [loading, setLoading] = useState(true);

	async function getWorkout() {
		let today = 0;
		try {
			const res = await axios.get(`http://localhost:4000/api/user/5`);
			console.log(res.data);
			switch (todayWorkout) {
				case 'Pull':
					today = 0;
					break;
				case 'Push':
					today = 1;
					break;
				case 'Legs':
					today = 2;
					break;
				case 'Yoga':
					today = 3;
					break;
				default:
					console.log('switch error');
			}
			setFinalWorkout(res.data.workouts[today].exercises);
			console.log(finalWorkout, 'final workout');
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (finalWorkout.length) {
				setLoading(false);
				console.log('triggered');
			}
		}, 5000);

		getWorkout();

		return () => clearTimeout(handleLoadingTimeOut);
	}, []);

	if (loading && !finalWorkout.length) {
		return <h2>Loading...</h2>;
	}

	if (!loading && !finalWorkout.length) {
		return <h2>Oops, something went wrong. Please try again later! </h2>;
	}


	return (
		<div className='selectWorkoutContainer'>
			<div className='workoutTypeContainer'>
				<h2> Today's {todayWorkout} Workout: </h2>
				<div>{finalWorkout[0]}</div>
				<button className='next-btn'>Next Excercise</button>
				<div>{finalWorkout[1]}</div>{' '}
				<button className='next-btn'>Next Excercise</button>
				<div>{finalWorkout[2]}</div>
				<button className='next-btn'>Next Excercise</button>
				<div>{finalWorkout[3]}</div>
				<button className='next-btn'>Next Excercise</button>
				<div>{finalWorkout[4]}</div>
				<button className='next-btn'>Next Excercise</button>
				<button className='ok-btn'>Let's Go</button>
			</div>
		</div>
	);
}

export default SelectWorkout;
