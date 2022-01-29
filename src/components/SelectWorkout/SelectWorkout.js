import './SelectWorkout.css';
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { WorkoutContext } from '../../workoutContext';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function SelectWorkout(props) {
	const { todayWorkout, setTodayWorkout } = useContext(WorkoutContext);
	const { finalWorkout, setFinalWorkout } = useContext(WorkoutContext);
	const [loading, setLoading] = useState(true);
	const [buttonText1, setButtonText1] = useState(finalWorkout[0]);
	const [buttonText2, setButtonText2] = useState(finalWorkout[1]);
	const [buttonText3, setButtonText3] = useState(finalWorkout[2]);
	const [buttonText4, setButtonText4] = useState(finalWorkout[3]);
	const [buttonText5, setButtonText5] = useState(finalWorkout[4]);
	const [toDashboard, setToDashboard] = useState(false);

	let [counter, setCounter] = useState(5);
	let [remainingWorkout, setRemainingWorkout] = useState([]);
	let currentWorkout;

	async function getWorkout() {
		let today = 0;
		try {
			const res = await axios.get(`https://flex-five.herokuapp.com/api/user/5`);
			console.log(res.data);
			switch (todayWorkout) {
				case 'Pull':
					today = 0;
					break;
				case 'Push':
					today = 1;
					break;
				case 'Legs':
					today = 2;
					break;
				case 'Yoga':
					today = 3;
					break;
				default:
					console.log('switch error');
			}
			setFinalWorkout(res.data.workouts[today].exercises);
			setRemainingWorkout(finalWorkout);
			console.log(currentWorkout, 'current workout');
			console.log(remainingWorkout, 'remainingWorkout');
			console.log(finalWorkout, 'final workout');
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (buttonText5) {
				setLoading(false);
				console.log('triggered');
			}
		}, 5000);
		getWorkout();
		return () => clearTimeout(handleLoadingTimeOut);
	}, []);

	const changeText1 = () => {
		setButtonText1(remainingWorkout[counter]);
		setCounter((counter + 1) % remainingWorkout.length);
	};
	const changeText2 = () => {
		setButtonText2(remainingWorkout[counter]);
		setCounter((counter + 1) % remainingWorkout.length);
	};
	const changeText3 = () => {
		setButtonText3(remainingWorkout[counter]);
		setCounter((counter + 1) % remainingWorkout.length);
	};
	const changeText4 = () => {
		setButtonText4(remainingWorkout[counter]);
		setCounter((counter + 1) % remainingWorkout.length);
	};
	const changeText5 = () => {
		setButtonText5(remainingWorkout[counter]);
		setCounter((counter + 1) % remainingWorkout.length);
	};
	if (loading && !buttonText5) {
		return <h2>Loading...</h2>;
	}
	if (!loading && !buttonText5) {
		return <h2>Oops, something went wrong. Please try again later! </h2>;
	}

	function handleClick() {
		const workoutData = {
			name: todayWorkout,
			exercises: [
				`${buttonText1}`,
				`${buttonText2}`,
				`${buttonText3}`,
				`${buttonText4}`,
				`${buttonText5}`,
			],
			date: new Date().toDateString().slice(4),
		};
		axios
			.post('https://flex-five.herokuapp.com/api/user/5', workoutData)
			.then((response) => {
				setToDashboard(true);
			})
			.catch((error) => {
				console.error('Something went wrong!', error);
			});
	}
	if (toDashboard === true) {
		return <Navigate to='/mydashboard' />;
	}
	return (
		<div className='selectWorkoutContainer'>
			<div className='workoutTypeContainer'>
				<h2> Today's {todayWorkout} Workout: </h2>
				<h3>Click to Switch to a Different Exercise</h3>

				<button className='workout-select' onClick={() => changeText1()}>
					{buttonText1}
				</button>
				<button className='workout-select' onClick={() => changeText2()}>
					{buttonText2}
				</button>
				<button className='workout-select' onClick={() => changeText3()}>
					{buttonText3}
				</button>
				<button className='workout-select' onClick={() => changeText4()}>
					{buttonText4}
				</button>
				<button className='workout-select' onClick={() => changeText5()}>
					{buttonText5}
				</button>
			</div>
			<button onClick={handleClick} className='start-btn workout-select'>
				Log Workout as Complete!
			</button>
		</div>
	);
}
export default SelectWorkout;
