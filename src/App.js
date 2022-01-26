
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import { WorkoutContext } from '../src/workoutContext';

import './App.css';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import TodayWorkout from './components/TodayWorkout/TodayWorkout';
import About from './components/About/About'

function App() {
	const [todayWorkout, setTodayWorkout] = useState("Lifts");
	const [selectWorkout, setSelectWorkout] = useState("Pull");
	const [customWorkout, setCustomWorkout] = useState("Cardio");
	const [modifyCustom, setModifyCustom] = useState(["pull up", "bentover row"]);

	return (
		<div>
			<WorkoutContext.Provider value={{ todayWorkout, setTodayWorkout}, {selectWorkout, setSelectWorkout}, {customWorkout, setCustomWorkout}, {modifyCustom, setModifyCustom}}>
				<Nav />
				<Routes>
					<Route path='/' element={<TodayWorkout />} />
					<Route path='/mydashboard' element={<Dashboard />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</WorkoutContext.Provider>
		</div>
	);
}

export default App;
