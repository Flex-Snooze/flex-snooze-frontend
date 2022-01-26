import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Routes, Link } from 'react-router-dom';
import TodayWorkout from './components/TodayWorkout/TodayWorkout';
import About from './components/About/About'

function App() {
	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<TodayWorkout />} />
				<Route path='/mydashboard' element={<Dashboard />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
