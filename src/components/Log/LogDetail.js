import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../../workoutContext';
import './LogDetail.css';
import axios from 'axios';

function LogDetail(props) {
	const { logId, userWorkoutData } = useContext(WorkoutContext);
	const [loading, setLoading] = useState(true);

	function handleClick() {
		console.log(userWorkoutData[logId]._id);
		console.log(logId);

		axios
			.delete(
				// 'https://flex-five.herokuapp.com/api/user/5',
				`https://flex-five.herokuapp.com/api/log/${userWorkoutData[logId]._id}`
			)
			// .then((response) => {
			// 	setToDashboard(true);
			// })
			.catch((error) => {
				console.error('Something went wrong!', error);
			});
	}

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
								<p key={idx}>
									<mark>{exercise}</mark>
								</p>
						  ))
						: userWorkoutData[logId].exercises}
				</div>
				<button className='logHeader__button' onClick={handleClick}>
					Remove Entry
				</button>
			</section>
		);
	} else return <h2>Select a workout to see details!</h2>;
}

export default LogDetail;
