import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../../workoutContext';
import axios from 'axios';
import './LogHeader.css'

function LogHeader(props) {
	const { userWorkoutData, setUserWorkoutData } = useContext(WorkoutContext);
	const { logId, setLogId } = useContext(WorkoutContext);
	const [loading, setLoading] = useState(true);

	async function getLog() {
		try {
			const res = await axios.get(`http://localhost:4000/api/user/5`);
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
		<div className='logHeader__div'>
			<h3>Workout Log</h3>
				{userWorkoutData.map((workout, idx) => {
					return (
						<button className="logHeader__button" onClick={handleClick} key={idx} id={idx}>
							{workout.name} {workout.date}
						</button>
					);
				})}
		</div>
	);
}

export default LogHeader;

///////PSUEDOCODE//////////

//make the api call to retrieve all workout information
//save to state
//map over the variable to create buttons with the date and type of workout
//create a function for onclick to render detailed data in the LogDetail component
// use state to grab the button click by idx id and render on LogDetail comp
