import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { WorkoutContext } from '../src/workoutContext';

import About from './components/About/About';
import CreateWorkout from './components/CreateWorkout/CreateWorkout';
import Dashboard from './components/Dashboard/Dashboard';
import Nav from './components/Nav/Nav';
import SelectWorkout from './components/SelectWorkout/SelectWorkout';
import TodayWorkout from './components/TodayWorkout/TodayWorkout';
import './App.css';

function App() {
	const [finalWorkout, setFinalWorkout] = useState([]);
	const [logId, setLogId] = useState(-1);
	const [todayWorkout, setTodayWorkout] = useState('Push');
	const [userWorkoutData, setUserWorkoutData] = useState([{}]);

	return (
		<div className='App'>
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
				<h1>Flex Five</h1>
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
