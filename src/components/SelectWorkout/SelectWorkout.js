import './SelectWorkout.css';
import React from 'react';

function SelectWorkout(props) {
	return (
		<div classname='selectWorkoutContainer'>
			<div className='workoutTypeContainer'>
				<div className='workoutType'>You selected: (Push/Pull/Legs/Yoga</div>
				<button className='next-btn'>Next</button>
				<button className='ok-btn'>Let's Go</button>
			</div>
		</div>
	);
}

export default SelectWorkout;
