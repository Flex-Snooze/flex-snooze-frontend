import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { WorkoutContext } from '../src/workoutContext';

import './App.css';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import TodayWorkout from './components/TodayWorkout/TodayWorkout';
import About from './components/About/About';
import SelectWorkout from './components/SelectWorkout/SelectWorkout';
import CreateWorkout from './components/CreateWorkout/CreateWorkout';

function App() {
	const [todayWorkout, setTodayWorkout] = useState("Push");
	const [finalWorkout, setFinalWorkout] = useState([
		'Bench Press',
		'Overhead Press',
		'Dumbbell Lateral Raises',
		'Tricep Pushdown',
		'Incline Dumbbell Press',
	]);
	const [userWorkoutData, setUserWorkoutData] = useState({
			name: "Yoga",
			exercises: [
			"Child's",
			"Child's",
			"Child's",
			"Child's",
			"Child's"
			],
			date: "1-5-22"
			})

	return (
		<div>
			<WorkoutContext.Provider
				value={{
					todayWorkout,
					setTodayWorkout,
					selectWorkout,
					setSelectWorkout,
					customWorkout,
					setCustomWorkout,
					finalWorkout,
					setFinalWorkout,
				}}>
				<Nav />
				<Routes>
					<Route path='/' element={<TodayWorkout />} />
					<Route path='/selectworkout' element={<SelectWorkout />}></Route>
					<Route path='/mydashboard' element={<Dashboard />} />
					<Route path='/about' element={<About />} />
					<Route path='/createworkout' element={<CreateWorkout />} />
				</Routes>
			</WorkoutContext.Provider>
		</div>
	);
}

export default App;
