import React from 'react'; 
import Log from '../Log/Log';
import UserData from '../UserData/UserData';

function Dashboard(props) {

	return (
		<div>
			Hello from Dashboard
			<UserData />
			<Log />
		</div>
	);
}

export default Dashboard;