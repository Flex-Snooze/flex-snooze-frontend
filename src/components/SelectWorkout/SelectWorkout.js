import './SelectWorkout.css';
import React from 'react';
import {useContext, useEffect} from 'react'
import { WorkoutContext } from '../../workoutContext';


function SelectWorkout(props) {

	const { todayWorkout, setTodayWorkout } = useContext(WorkoutContext);
	const { finalWorkout, setFinalWorkout} = useContext(WorkoutContext);;


	// useEffect(() => {
	// 	fetch('http://localhost:4000/api/user/5')
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			setFinalWorkout(json);
	// 			console.log(finalWorkout);

	// 			console.log(`this is state ${todayWorkout}`)
	// 		})
	// 		.catch(console.error);
	// }, []);



	return (
		<div className='selectWorkoutContainer'>
			<div className='workoutTypeContainer'>
				<h2> Today's {todayWorkout} Workout: </h2>
				<div>1</div>
				<button className='next-btn'>Next Excercise</button>
				<div>2</div>{' '}
				<button className='next-btn'>Next Excercise</button>
				<div>3</div>
				<button className='next-btn'>Next Excercise</button>
				<div>4</div>
				<button className='next-btn'>Next Excercise</button>
				<div>5</div>
				<button className='next-btn'>Next Excercise</button>
				<button className='ok-btn'>Let's Go</button>
			</div>
		</div>
	);
}

export default SelectWorkout;
