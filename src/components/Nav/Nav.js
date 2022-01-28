import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav(props) {
	return (
		<nav>
			<ul className='nav__ul'>
				<Link to={'/mydashboard'}>
					<li className='nav__li'>My Dashboard </li>
				</Link>
				<Link to={'/'}>
					<li className='nav__li'>Get a Workout</li>
				</Link>
				<Link to={'/about'}>
					<li className='nav__li'>About</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
