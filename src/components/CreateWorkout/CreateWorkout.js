import React from 'react';
import { useContext } from 'react';
import { WorkoutContext } from '../../workoutContext';


function CreateWorkout(props) {
	const { todayWorkout, setTodayWorkout } = useContext(WorkoutContext);
	const { finalWorkout, setFinalWorkout } = useContext(WorkoutContext);

	return (
        <div>{todayWorkout}</div>
    );
}

export default CreateWorkout;