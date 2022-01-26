import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { WorkoutContext } from '../src/workoutContext';

import './App.css';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import TodayWorkout from './components/TodayWorkout/TodayWorkout';
import About from './components/About/About';
import SelectWorkout from './components/SelectWorkout/SelectWorkout';
import ModifyWorkout from './components/ModifyWorkout/ModifyWorkout';
import CreateWorkout from './components/CreateWorkout/CreateWorkout';

function App() {
	const [todayWorkout, setTodayWorkout] = useState('Lifts');
	const [selectWorkout, setSelectWorkout] = useState('Pull');
	const [customWorkout, setCustomWorkout] = useState('Cardio');
	const [finalWorkout, setFinalWorkout] = useState(['pull up', 'bentover row']);

	return (
		<div>
			<WorkoutContext.Provider
				value={
					({ todayWorkout, setTodayWorkout },
					{ selectWorkout, setSelectWorkout },
					{ customWorkout, setCustomWorkout },
					{ finalWorkout, setFinalWorkout })
				}>
				<Nav />
				<Routes>
					<Route path='/' element={<TodayWorkout />} />
					<Route path='/selectworkout' element={<SelectWorkout />}></Route>
					<Route path='/mydashboard' element={<Dashboard />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</WorkoutContext.Provider>
		</div>
	);
}

export default App;
