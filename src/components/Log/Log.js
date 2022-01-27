import React from 'react';
import { useContext, useState } from 'react';
import { WorkoutContext } from '../../workoutContext';
    
function Log(props) {
	const { finalWorkout, setFinalWorkout } = useContext(WorkoutContext);

	return <div>hello from Log</div>;
}

export default Log;