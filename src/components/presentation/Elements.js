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
					<Post 
						title="Campfire Stories" 
						image="images/campfire.png" 
						text="Campfire Stories is a showcase of stories from Free Code Camp members from around the world who are learning how to program (think Humans of New York)."
						github="https://github.com/mkarabashev/campfire-stories"
						live="http://www.campfire-stories.xyz/" />
					<Post 
						title="Baseball Podcast" 
						image="images/baseballpodcast.png" 
						text="Mobile web podcast that streams podcasts from iTunes API."
						github="https://github.com/vientang/baseball-podcasts"
						live="https://baseball-podcasts.herokuapp.com/" />
					<Post 
						title="VISE from AILabs" 
						image="images/vise.png" 
						text="A React based admin dashboard that visualizes Ai based technology built to give Financial Advisors access to cutting edge research."
						github="#"
						live="http://www.ailabs.co/" />
				</section>

				<section id="two" className="wrapper style3 fade-up">
					<div className="inner">
						<h2>About me</h2>
						<p>I'm a software engineer, able to work across the stack from designing UI components to database querying, in building clean and scalable code.</p>
						<div className="features">
							<Feature icon="icon major fa-code" stack='Front End' />
							<Feature icon="icon major fa-code" stack='Other' />
						</div>
						<ul className="actions">
							<li><a href="#" className="button">Back to the top</a></li>
						</ul>
					</div>
				</section>

				<section id="three" className="wrapper style4 fade-up">
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
