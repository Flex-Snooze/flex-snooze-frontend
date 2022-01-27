import './TodayWorkout.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {useContext, useState} from 'react'
import { WorkoutContext } from '../../workoutContext';


function TodayWorkout(props) {
	
	const { todayWorkout, setTodayWorkout } = useContext(WorkoutContext);

	function handleClick(event) {
		let selectedWorkout = event.target.id;
		console.log(selectedWorkout);
		if (selectedWorkout === 'pushBtn') {
			setTodayWorkout('Push');
			console.log(todayWorkout);
		} else if (selectedWorkout === 'pullBtn') {
			setTodayWorkout('Pull');
			console.log(todayWorkout);
		} else if (selectedWorkout === 'legsBtn') {
			setTodayWorkout('Legs');
			console.log(todayWorkout);
		} else if (selectedWorkout === 'yogaBtn') {
			setTodayWorkout('Yoga');
			console.log(todayWorkout);
		} else if (selectedWorkout === 'customBtn') {
			setTodayWorkout('Build Your Custom Workout');
			console.log(todayWorkout);
		}

	}

	return (
		<div className='todayWorkoutContainer'>
			<div className='todayWorkoutSelection'>
				<h2>Get Today's Workout</h2>
				<Link to={'/selectworkout'}>
					<button id='pushBtn' onClick={handleClick}>
						Push
					</button>
				</Link>
				<Link to={'/selectworkout'}>
					<button id='pullBtn' onClick={handleClick}>
						Pull
					</button>
				</Link>
				<Link to={'/selectworkout'}>
					<button id='legsBtn' onClick={handleClick}>
						Legs
					</button>
				</Link>
				<Link to={'/selectworkout'}>
					<button id='yogaBtn' onClick={handleClick}>
						Yoga
					</button>
				</Link>
				<Link to={'/createworkout'}>
					<button id='customBtn' onClick={handleClick}>
						Custom Workout
					</button>
				</Link>
			</div>
		</div>
	);
}

export default TodayWorkout;
