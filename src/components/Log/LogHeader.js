import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../../workoutContext';
import axios from 'axios';
import './LogHeader.css';

function LogHeader(props) {
	const { userWorkoutData, setUserWorkoutData } = useContext(WorkoutContext);
	const { logId, setLogId } = useContext(WorkoutContext);
	const [loading, setLoading] = useState(true);

	async function getLog() {
		try {
			const res = await axios.get(`https://flex-five.herokuapp.com/api/user/5`);
			setUserWorkoutData(res.data.log);
			console.log(res.data.log);
			console.log(userWorkoutData, 'user log');
		} catch (err) {
			console.log(err);
		}
	}

	function handleClick(event) {
		let btnId = event.target.id;
		console.log(btnId);
		setLogId(btnId);
	}

	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (userWorkoutData.length > 1) {
				setLoading(false);
				console.log('triggered');
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
			{/* The type of exercise and date were going to the top but the log details were moved into whatever the last entry was.  I removed the reverse and the log and details match but are back at the bottom. */}
			{userWorkoutData.slice(0).reverse().map((workout, idx) => {
				return (
					<button
						className='logHeader__button'
						onClick={handleClick}
						key={idx}
						id={idx}>
						{workout.name} {workout.date}
					</button>
				);
			})}
		</div>
	);
}

export default LogHeader;
