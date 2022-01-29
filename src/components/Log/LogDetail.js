import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../../workoutContext';
import './LogDetail.css';

function LogDetail(props) {
	const { logId, userWorkoutData } = useContext(WorkoutContext);
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
			<section className='logDetail__div'>
				<h4>
					{userWorkoutData[logId].date}'s {userWorkoutData[logId].name} Workout:
				</h4>
				<div className='logDetail__inner-div'>
					{Array.isArray(userWorkoutData[logId].exercises)
						? userWorkoutData[logId].exercises.map((exercise, idx) => (
								<p key={idx} class='logDetail__items'>
									<mark>{exercise}</mark>
								</p>
						  ))
						: userWorkoutData[logId].exercises}
				</div>
			</section>
		);
	} else return <h2>Select a workout to see details!</h2>;
}

export default LogDetail;
