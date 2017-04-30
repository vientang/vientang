import React, { Component } from 'react'

export default (props) => {
	return (
		<section>
			<ul className="contact">
				<li>
					<h3>Location</h3>
					<span>San Francisco, CA<br />
					USA</span>
				</li>
				<li>
					<h3>Email</h3>
					<a href="#">vientang@protonmail.com</a>
				</li>
				<li>
					<h3>Social</h3>
					<ul className="icons">
						<li><a href="https://twitter.com/vienchitang" className="fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="https://github.com/vientang" className="fa-github"><span className="label">GitHub</span></a></li>
						<li><a href="https://www.linkedin.com/in/vientang/" className="fa-linkedin"><span className="label">LinkedIn</span></a></li>
					</ul>
				</li>
			</ul>
		</section>
	)
}
