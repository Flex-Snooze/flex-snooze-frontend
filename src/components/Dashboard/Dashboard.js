import React from 'react'; 
import LogDetail from '../Log/LogDetail';
import LogHeader from '../Log/LogHeader';
import UserData from '../UserData/UserData';

function Dashboard(props) {

	return (
		<div>
			<h2>Your Dashboard</h2>
			<UserData />
			<LogHeader/>
			<LogDetail/>
		</div>
	);
}

export default Dashboard;