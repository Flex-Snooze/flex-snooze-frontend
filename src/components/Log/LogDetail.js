import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../../workoutContext';
import axios from 'axios';

function LogDetail(props) {
	const { finalWorkout, setFinalWorkout } = useContext(WorkoutContext);
	const { userWorkoutData, setUserWorkoutData } = useContext(WorkoutContext);
	const { logId, setLogId } = useContext(WorkoutContext);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (logId >= 0) {
				setLoading(false);
				console.log('triggered');
			}
		}, 5000);
		return () => clearTimeout(handleLoadingTimeOut);
	}, [logId]);

	if (loading && logId < 0) {
		return <h2>Select a workout to see details!</h2>;
	}

	if (logId >= 0) {
		return (
			<div>
				<span>{userWorkoutData[logId].date}</span>
				<br></br>
				<span>{userWorkoutData[logId].exercises[0]}</span>
				<br></br>
				<span>{userWorkoutData[logId].exercises[1]}</span>
				<br></br>
				<span>{userWorkoutData[logId].exercises[2]}</span>
				<br></br>
				<span>{userWorkoutData[logId].exercises[3]}</span>
				<br></br>
				<span>{userWorkoutData[logId].exercises[4]}</span>
			</div>
		);
	} else return <h2>Select a workout to see details!</h2>;
}

export default LogDetail;
