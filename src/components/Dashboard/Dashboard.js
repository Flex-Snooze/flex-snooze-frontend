import LogDetail from '../Log/LogDetail';
import LogHeader from '../Log/LogHeader';
import './Dashboard.css';

function Dashboard(props) {
	return (
		<div className='dashboard__div'>
			<h2 className='dashboard__h2'>Your Dashboard</h2>
			<h3 className='dashboard__h3'>Select a workout for details</h3>
			<LogHeader />
			<LogDetail />
		</div>
	);
}

export default Dashboard;
