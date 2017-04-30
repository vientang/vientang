import React, { Component } from 'react'

export default (props) => {
  const heading = props.stack
  let skills
  if (heading === 'Front End') {
    skills = 'React, Redux, Sass, vanilla JS, HTML5, CSS3, jQuery, Angular'
  } else {
    skills = 'Git, SQL, MongoDB, Node, Express, TDD, Task Automation, Web scraping'
  }
	return (
		<section>
			<span className={props.icon}></span>
			<h3>{heading}</h3>
			<p>{skills}</p>
		</section>
	)

}
