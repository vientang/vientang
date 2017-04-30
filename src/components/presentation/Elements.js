import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Feature from './Feature'
import Form from './Form'
import Post from './Post'
import Contact from './Contact'

export default (props) => {
	return (
		<div>
			<Sidebar />
			<div id="wrapper">
				<section id="intro" className="wrapper style1 fullscreen fade-up">
					<div className="inner">
						<h1>Hey, I'm Vien</h1>
						<p>A jack of all trades programmer, pals with CSS, and explorer of the internet.</p>
						<ul className="actions">
							<li><a href="#one" className="button scrolly">Learn more</a></li>
						</ul>
					</div>
				</section>

				<section id="one" className="wrapper style2 spotlights">
					<Post title="Campfire Stories" image="images/pic01.jpg" text="Campfire Stories is a showcase of stories from Free Code Camp members from around the world who are learning how to program (think Humans of New York)." />
					<Post title="Westeros Recipes" image="images/pic02.jpg" text="Recipe review app that enables users to rate their favorite recipes." />
					<Post title="VISE from AILabs" image="images/pic03.jpg" text="A React based admin dashboard that visualizes Ai based technology built to give Financial Advisors access to cutting edge research." />
				</section>

				<section id="two" className="wrapper style3 fade-up">
					<div className="inner">
						<h2>About me</h2>
						<p>Front-End Engineer, able to work across the stack from designing UI components to database querying, in building clean and scalable code.</p>
						<div className="features">
							<Feature icon="icon major fa-code" />
							<Feature icon="icon major fa-code" />
						</div>
						<ul className="actions">
							<li><a href="#" className="button">Back to the top</a></li>
						</ul>
					</div>
				</section>

				<section id="three" className="wrapper style1 fade-up">
					<div className="inner">
						<h2>Get in touch</h2>
						<div className="split style1">
							<section>
								<Form />
							</section>
							<Contact />
						</div>
					</div>
				</section>

			</div>
			<Footer />
		</div>
	)
}
