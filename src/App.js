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
	const [todayWorkout, setTodayWorkout] = useState('Push');
	const [logId, setLogId] = useState(-1);
	const [finalWorkout, setFinalWorkout] = useState([]);
	const [userWorkoutData, setUserWorkoutData] = useState([{}]);

	return (
		<div>
			<WorkoutContext.Provider
				value={{
					todayWorkout,
					setTodayWorkout,
					finalWorkout,
					setFinalWorkout,
					userWorkoutData,
					setUserWorkoutData,
					logId,
					setLogId,
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
