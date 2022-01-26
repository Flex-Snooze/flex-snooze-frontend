import './SelectWorkout.css';
import React from 'react';

function SelectWorkout(props) {
	return (
		<div classname='selectWorkoutContainer'>
			<div className='workoutTypeContainer'>
				<h2> Today's Selected Workout:</h2>
				<div>Workout 1</div>
				<button className='next-btn'>Next Excercise</button>
				<div>Workout 2</div>{' '}
				<button className='next-btn'>Next Excercise</button>
				<div>Workout 3</div>
				<button className='next-btn'>Next Excercise</button>
				<div>Workout 4</div>
				<button className='next-btn'>Next Excercise</button>
				<div>Workout 5</div>
				<button className='next-btn'>Next Excercise</button>
				<button className='ok-btn'>Let's Go</button>
			</div>
		</div>
	);
}

export default SelectWorkout;
