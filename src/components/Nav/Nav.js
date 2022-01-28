import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav(props) {
	return (
		<nav>
			<ul className='nav__ul'>
				<Link to={'/mydashboard'}>
					<li>My Dashboard </li>
				</Link>
				<Link to={'/'}>
					<li>Get a Workout</li>
				</Link>
				<Link to={'/about'}>
					<li>About</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
