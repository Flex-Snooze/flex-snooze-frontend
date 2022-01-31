import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../../workoutContext';
import './LogDetail.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogDetail(props) {
	const { logId, setLogId, userWorkoutData, setUserWorkoutData } =
		useContext(WorkoutContext);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	function wait(ms, value) {
		return new Promise((resolve) => setTimeout(resolve, ms, value));
	}

	function handleClick(event) {
		event.preventDefault();
		// console.log(userWorkoutData[logId]);
		// console.log(logId);

		axios
			.delete(
				`https://flex-five.herokuapp.com/api/log/${userWorkoutData[logId]._id}`
			)
			.then(() => {
				axios
					.get(`https://flex-five.herokuapp.com/api/log`)
					.then((value) => wait(1000, value))
					.then((res) => {
						setUserWorkoutData(res.data);
						setLogId(-1);
					})
					.then((value) => wait(1000, value))
					.then(() => navigate('/mydashboard'));
			})

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
		return null;
	}

	if (logId < 0) {
		return <h2>Select a workout to see details!</h2>;
	}

	if (logId >= 0) {
		return userWorkoutData[logId]?.date ? (
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
		) : null;
	} else return <h2>Select a workout to see details!</h2>;
}

export default LogDetail;
