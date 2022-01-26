import './TodayWorkout.css';
import React from 'react';
// import { WorkoutContext } from '../../workoutContext';
import { Link } from 'react-router-dom';
// import CreateWorkout from '../CreateWorkout/CreateWorkout';

// {
// 	useContext;
// }

// import { Route, Routes, Link } from 'react-router-dom';

function TodayWorkout(props) {
	// const { todayWorkout, setTodayWorkout } = useContext(WorkoutContext);

	return (
		<div className='todayWorkoutContainer'>
			<div className='todayWorkoutSelection'>
				<h2>Get Today's Workout</h2>
				<Link to={'/selectworkout'}>
					<button>Push</button>
				</Link>
				<Link to={'/selectworkout'}>
					<button>Pull</button>
				</Link>
				<Link to={'/selectworkout'}>
					<button>Legs</button>
				</Link>
				<Link to={'/selectworkout'}>
					<button>Yoga</button>
				</Link>
				<Link to={'/createworkout'}>
					<button>Custom Workout</button>
				</Link>
			</div>
		</div>
	);
}

export default TodayWorkout;
