import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../../workoutContext';
import axios from 'axios';
import './LogDetail.css';

function LogDetail(props) {
	const { finalWorkout, setFinalWorkout } = useContext(WorkoutContext);
	const { userWorkoutData, setUserWorkoutData } = useContext(WorkoutContext);
	const { logId, setLogId } = useContext(WorkoutContext);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (logId >= 0) {
				setLoading(false);
			}
		}, 5000);
		return () => clearTimeout(handleLoadingTimeOut);
	}, [logId]);

	if (loading && logId < 0) {
		return null; //<h3>Select workout for details</h3>;
	}

	if (logId >= 0) {
		return (
			// Details are displaying for customer workout as indexes of the string according to [] set below.  Does the customer workout need to have its state sent to a separate model on the backend so that it can display correctly.
			<section className='logDetail__div'>
				<h3>Details</h3>
				<div>{userWorkoutData[logId].date}</div>
				<div>{userWorkoutData[logId].exercises}</div>
				<div>{userWorkoutData[logId].exercises[1]}</div>
				<div>{userWorkoutData[logId].exercises[2]}</div>
				<div>{userWorkoutData[logId].exercises[3]}</div>
				<div>{userWorkoutData[logId].exercises[4]}</div>
			</section>
		);
	} else return <h2>Select a workout to see details!</h2>;
}

export default LogDetail;
