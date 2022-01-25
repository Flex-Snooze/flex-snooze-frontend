import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

function Nav(props) {
    return (
			<nav>
				<ul>
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