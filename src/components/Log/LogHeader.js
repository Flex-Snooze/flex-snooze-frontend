import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { WorkoutContext } from '../../workoutContext';
    
function LogHeader(props) {

	const { finalWorkout, setFinalWorkout } = useContext(WorkoutContext);
	const { todayWorkout, setTodayWorkout } = useContext(WorkoutContext);
	let userWorkouts
	// useEffect(() => {
	// 	fetch('http://localhost:4000/api/user/5')
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			// setFinalWorkout(json);
	// 			console.log(json);

	// 		})
	// 		.catch(console.error);
	// }, []);

	return (
	<div>hello from Logheader</div>




	);
}

export default LogHeader;


///////PSUEDOCODE//////////

//make the api call to retrieve all workout information
//save to a variable
//map over the variable to create buttons with the date and type of workout 
//create a function for onclick to render detailed data in the LogDetail component