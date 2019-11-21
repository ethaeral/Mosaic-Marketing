import React, { useState } from "react";
import axios from "axios";
import logo from "./assets/logoName.png";
import "./App.css";

function App() {
	const [topForm, setTopForm] = useState({ email: "" });
	const [bottomForm, setBottomForm] = useState({ email: "" });
	const [error, setError] = useState(null);

	const sendEmail = email => {
		axios
			.post("https://getmosaicapp.herokuapp.com/api/emails", email)
			.then(res => {
				console.log(res.data);
				setError(false);
			})
			.catch(err => {
				console.log(err.message);
				setError(true);
			});
	};

	const onTopChange = e => {
		setTopForm({
			email: e.target.value.toLowerCase()
		});
	};
	const onBottomChange = e => {
		setBottomForm({
			email: e.target.value.toLowerCase()
		});
	};

	const onTopSubmit = e => {
		e.preventDefault();

		sendEmail(topForm);
	};
	const onBottomSubmit = e => {
		e.preventDefault();
		sendEmail(bottomForm);
	};

	return (
		<div className='container'>
			<header>
				<img className='header-logo' src={logo} alt='mosaic logo' />
			</header>
			<main>
				<section className='top-pitch-container'>
					<div className='top-pitch'>
						<div>
							<h1 className='main-text'>
								Piece the bits together <br />
								Get the bigger picture
							</h1>
						</div>
						<div className='cta'>
							<h2>
								Mosaic is designed to help guide teams step by step to clean,
								massage data, make a model, and help users understand its
								outputs by informing them the reason behind each option.			
								Run custom code analysis without touching a line of code.
								<br /> Request beta access:
							</h2>
							<form onSubmit={onTopSubmit}>
								<input
									className='email'
									type='email'
									placeholder='Email Address'
									required
									onChange={onTopChange}
								/>
								<button className='cta-btn' type='submit'>
									Sign Up
								</button>
							</form>
							{error === null ? null : error === false ? (
								<p className='success'>Email successfully added</p>
							) : (
								<p className='error'>Unable to process</p>
							)}
						</div>
					</div>
				</section>

				<section className='hook'>
					<h2>Got big data? Demystify it.</h2>
					<h3>
						Clean, parse, interpret, and communicate your findings in a
						beautiful way.
					</h3>
				</section>

				<section className='features-container'>
					<div className='features'>
						<div className='three-container'>
							<div className='feature-description'>
								<h4>Flexible workspaces</h4>
								<p>
									Customize and organize your workspace the way it makes sense
								</p>
							</div>
							<div className='feature-description'>
								<h4>Manage your research</h4>
								<p>
									Sort your workspace, favorite them, and group them based on
									projects
								</p>
							</div>
							<div className='feature-description'>
								<h4>Create custom interactive graphics</h4>
								<p>
									Use tools to customize findings, overlay graphs, zoom in to
									inspect, and zoom out to get an overview
								</p>
							</div>
						</div>
						<div className='three-container'>
							<div className='feature-description'>
								<h4>Guided insights</h4>
								<p>
									Have your own mini junior data scientist that doesn't sleep or
									need vacations - but please be nice to it
								</p>
							</div>
							<div className='feature-description'>
								<h4>Upload your own data</h4>
								<p>
									Store your data with us. We won't even be able to read it once
									our algorithms are done with it
								</p>
							</div>
							<div className='feature-description'>
								<h4>Use Mosaic's database</h4>
								<p>
									We've webscraped public-use data for you to compare your data
									with and or analyze the overall market
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className='final-cta-container'>
					<div className='final-cta'>
						<h2>Interested? Become a Beta User</h2>

						<form onSubmit={onBottomSubmit}>
							<input
								className='email'
								type='email'
								placeholder='Email Address'
								onChange={onBottomChange}
								required
							/>
							<button className='final-cta-btn' type='submit'>
								Sign Up
							</button>
						</form>
						{error === null ? null : error === false ? (
							<p className='success'>Email successfully added</p>
						) : (
							<p className='error'>Unable to process</p>
						)}
					</div>
				</section>

				<footer>
					<div>
						<p>
							Made with{" "}
							<span role='img' aria-label='tea'>
								🍵
							</span>{" "}
							and{" "}
							<span role='img' aria-label='time'>
								⏳
							</span>{" "}
							from Boston, MA{" "}
							<span role='img' aria-label='us'>
								🇺🇸
							</span>
						</p>
					</div>
					<div>
						<p>Contact</p>
					</div>
				</footer>
			</main>
		</div>
	);
}

export default App;
