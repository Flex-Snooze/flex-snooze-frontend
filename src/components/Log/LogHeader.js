import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../../workoutContext';
import axios from 'axios';
import './LogHeader.css';

function LogHeader(props) {
	const { userWorkoutData, setUserWorkoutData, setLogId } =
		useContext(WorkoutContext);
	const [loading, setLoading] = useState(true);

	async function getLog() {
		try {
			const res = await axios.get(`https://flex-five.herokuapp.com/api/user/5`);
			setUserWorkoutData(res.data.log);
		} catch (err) {
			console.log(err);
		}
	}

	function handleClick(event) {
		let btnId = event.target.id;
		setLogId(btnId);
	}

	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (userWorkoutData.length > 1) {
				setLoading(false);
			}
		}, 5000);
		getLog();
		return () => clearTimeout(handleLoadingTimeOut);
	}, []);

	if (loading && !userWorkoutData) {
		return <h2>Loading...</h2>;
	}

	if (!loading && !userWorkoutData) {
		return <h2>Oops, something went wrong. Please try again later! </h2>;
	}

	return (
		<div className='logHeader__div, scroller'>
			<h3 className='logHeader__h3'>Workout Log</h3>

			{userWorkoutData
				.slice(0)
				.reverse()
				.map((workout, idx) => {
					return (
						<button
							className='logHeader__button'
							onClick={handleClick}
							key={idx}
							id={userWorkoutData.length - idx - 1}>
							{workout.name} {workout.date}
						</button>
					);
				})}
		</div>
	);
}

export default LogHeader;
