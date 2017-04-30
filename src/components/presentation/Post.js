import React, { Component } from 'react'

export default (props) => {
	return (
		<section>
			<a href="#" className="image"><img src={props.image} alt="" data-position="center center" /></a>
			<div className="content">
				<div className="inner">
					<h2>{props.title}</h2>
					<p>{props.text}</p>
					<ul className="actions">
						<li><a href={props.github} className="button">Code</a></li>
						<li><a href={props.live} className="button">Live</a></li>
					</ul>
				</div>
			</div>
		</section>
	)
}
