import './SelectWorkout.css';
import React from 'react';
import {useContext, useEffect} from 'react'
import { WorkoutContext } from '../../workoutContext';


function SelectWorkout(props) {

	const { todayWorkout, setTodayWorkout } = useContext(WorkoutContext);
	const { finalWorkout, setFinalWorkout} = useContext(WorkoutContext);;


	useEffect(() => {
		fetch('http://localhost:4000/api/workout')
			.then((res) => res.json())
			.then((json) => {
				setFinalWorkout(json);
				console.log(finalWorkout[1]);

				console.log(`this is state ${todayWorkout}`)
			})
			.catch(console.error);
	}, []);



	return (
		<div className='selectWorkoutContainer'>
			<div className='workoutTypeContainer'>
				<h2> Today's {todayWorkout} Workout: </h2>
				<div>{finalWorkout[1].exercises[0]}</div>
				<button className='next-btn'>Next Excercise</button>
				<div>{finalWorkout[1].exercises[1]}</div>{' '}
				<button className='next-btn'>Next Excercise</button>
				<div>{finalWorkout[1].exercises[2]}</div>
				<button className='next-btn'>Next Excercise</button>
				<div>{finalWorkout[1].exercises[3]}</div>
				<button className='next-btn'>Next Excercise</button>
				<div>{finalWorkout[1].exercises[4]}</div>
				<button className='next-btn'>Next Excercise</button>
				<button className='ok-btn'>Let's Go</button>
			</div>
		</div>
	);
}

export default SelectWorkout;
