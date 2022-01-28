import './TodayWorkout.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WorkoutContext } from '../../workoutContext';
import axios from 'axios';

function TodayWorkout(props) {
	const { todayWorkout, setTodayWorkout } = useContext(WorkoutContext);
	const { finalWorkout, setFinalWorkout } = useContext(WorkoutContext);
	let resData = {};

	function handleClick(event) {
		let selectedWorkout = event.target.id;
		switch (selectedWorkout) {
			case 'pushBtn':
				setFinalWorkout(resData[1].exercises);
				setTodayWorkout(resData[1].name);
				break;
			case 'pullBtn':
				setFinalWorkout(resData[0].exercises);
				setTodayWorkout(resData[0].name);
				break;
			case 'legsBtn':
				setFinalWorkout(resData[2].exercises);
				setTodayWorkout(resData[2].name);
				break;
			case 'yogaBtn':
				setFinalWorkout(resData[3].exercises);
				setTodayWorkout(resData[3].name);
				break;
			case 'customBtn':
				setFinalWorkout('Build Your Custom Workout');
				break;
			default:
				console.log('switch error');
		}
	}

	async function getWorkout() {
		try {
			const res = await axios.get(`https://flex-five.herokuapp.com/api/user/5`);
			resData = res.data.workouts;
			console.log(resData, 'resData');
			return resData;
		} catch (err) {
			console.log(err);
		}
	}
	getWorkout();

	return (
		<div className='todayWorkoutContainer'>
			<div className='todayWorkoutSelection'>
				<h2>Get Today's Workout</h2>
				<Link to={'/selectworkout'}>
					<button className='workout-select' id='pushBtn' onClick={handleClick}>
						Push
					</button>
				</Link>
				<Link to={'/selectworkout'}>
					<button className='workout-select' id='pullBtn' onClick={handleClick}>
						Pull
					</button>
				</Link>
				<Link to={'/selectworkout'}>
					<button className='workout-select' id='legsBtn' onClick={handleClick}>
						Legs
					</button>
				</Link>
				<Link to={'/selectworkout'}>
					<button className='workout-select' id='yogaBtn' onClick={handleClick}>
						Yoga
					</button>
				</Link>
				<Link to={'/createworkout'}>
					<button
						className='workout-select'
						id='customBtn'
						onClick={handleClick}>
						Custom Workout
					</button>
				</Link>
			</div>
		</div>
	);
}

export default TodayWorkout;
