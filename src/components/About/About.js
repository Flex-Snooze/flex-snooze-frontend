<<<<<<< HEAD
import React from 'react';
import RachelHeadshot from '../../Assets/rachel-headshot.jpeg';
import GeorgeHeadshot from '../../Assets/george-headshot.png';
import AshleighHeadshot from '../../Assets/ashleigh-headshot.jpg';
import BillHeadshot from '../../Assets/bill-headshot.jpeg';
import './About.css';

=======
<<<<<<< HEAD
import './About.css';
import AshleighHeadshot from '../../Assets/ashleigh-headshot.jpg';
import BillHeadshot from '../../Assets/bill-headshot.jpeg';
import GeorgeHeadshot from '../../Assets/george-headshot.jpeg';
import RachelHeadshot from '../../Assets/rachel-headshot.jpeg';
=======
import React from 'react';
import RachelHeadshot from '../../Assets/rachel-headshot.jpeg';
import GeorgeHeadshot from '../../Assets/george-headshot.png';
import AshleighHeadshot from '../../Assets/ashleigh-headshot.jpg';
import BillHeadshot from '../../Assets/bill-headshot.jpeg';
import './About.css';
>>>>>>> c249bd6 (Fix deletion bug)
>>>>>>> fd9ce1a (finishing polish)

function About(props) {
	return (
		<div className='about__div'>
			<h2>About</h2>
			<p className='about__p'>
				Feeling stuck in your workout routine? It's time to break out of your
				rut, and track your progress as you go!
				<br />
				<br />
				This mobile app was designed to be taken on-the-go, whether to the gym
				to crush one of our recommended workouts, or out in nature for a trail
				run. Wherever you workout, Flex Five is your logging buddy to ensure you
				can easily keep your fitness goals top of mind.
				<br />
				<br />
				Flex Five was created by a group of General Assembly students, each with
				a passion for health and fitness. We hope your experience with our Full
				Stack project is as fun for you to use as it was for us to create.
				<br />
				<br />
				Let's get Logging!
			</p>

			<h3>Connect with us on LinkedIn</h3>
			<div className='about__cardContainer'>
				<div className='about__cardGeorge'>
					<a
						className='about__linkedIn'
						href='https://www.linkedin.com/in/georgemaganzini/'>
						<img
							className='about__headshot__img'
							src={GeorgeHeadshot}
							alt='George'
						/>
					</a>
					<h4>George Maganzini</h4>
				</div>
				<div className='about__cardRachel'>
					<a
						className='about__linkedIn'
						href='https://www.linkedin.com/in/rachelmagley/'>
						<img
							className='about__headshot__img'
							src={RachelHeadshot}
							alt='Rachel'
						/>
					</a>
					<h4>Rachel Magley</h4>
				</div>
				<div className='about__cardBill'>
					<a
						className='about__linkedIn'
						href='https://www.linkedin.com/in/billsweeney85/'>
						<img
							className='about__headshot__img'
							src={BillHeadshot}
							alt='Bill'
						/>
					</a>
					<h4>Bill Sweeney</h4>
				</div>
				<div className='about__cardAshleigh'>
					<a
						className='about__linkedIn'
						href='https://www.linkedin.com/in/ashleighrene/'>
						<img
							className='about__headshot__img'
							src={AshleighHeadshot}
							alt='Ashleigh'
						/>
					</a>
					<h4>Ashleigh Waller</h4>
				</div>
			</div>
		</div>
	);
}

export default About;
