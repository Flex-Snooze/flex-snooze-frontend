import React from 'react'; 
import LogDetail from '../Log/LogDetail';
import LogHeader from '../Log/LogHeader';
import UserData from '../UserData/UserData';
import "./Dashboard.css"

function Dashboard(props) {

	return (
		<div className='dashboard__div'>
			<h2 className='dashboard__h2'>Your Dashboard</h2>
			<h3 className='dashboard__h3'>Select a workout for details</h3>
			<UserData />
			<LogHeader/>
			<LogDetail/>
		</div>
	);
}

export default Dashboard;