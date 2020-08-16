import React from 'react'
import { Chip } from '@material-ui/core'

import Image from './image'

import './skills.css'

const Skills = () => {
	return (
		<section className="section">
			<div className="order-md-1 imageBorder">
				<div className="image">
          <Image />
        </div>
			</div>
			<h2>Skills</h2>
			<section>
				<h3>Front-End</h3>
				<ul>
					<li><Chip label="JavaScript" /></li>
					<li><Chip label="React.js" /></li>
					<li><Chip label="CSS3" /></li>
					<li><Chip label="HTML5" /></li>
					<li><Chip label="GatsbyJS" /></li>
					<li><Chip label="Vue.js" /></li>
					<li><Chip label="JSON" /></li>
					<li><Chip label="UX" /></li>
				</ul>
			</section>
			<section>
				<h3>Back-End</h3>
				<ul>
					<li><Chip label="Node.js" /></li>
					<li><Chip label="ExpressJS" /></li>
					<li><Chip label="GraphQL" /></li>
					<li><Chip label="Go" /></li>
					<li><Chip label="C#" /></li>
					<li><Chip label="PHP" /></li>
					<li><Chip label="Java" /></li>
				</ul>
			</section>
			<section>
				<h3>Server // Database // CI // CD</h3>
				<ul>
					<li><Chip label="Docker" /></li>
					<li><Chip label="Git" /></li>
					<li><Chip label="MongoDB" /></li>
					<li><Chip label="SQL" /></li>
					<li><Chip label="Heroku" /></li>
					<li><Chip label="Redis" /></li>
					<li><Chip label="Netlify" /></li>
					<li><Chip label="AWS" /></li>
					<li><Chip label="Travis" /></li>
					<li><Chip label="Ansible" /></li>
				</ul>
			</section>
		</section>
	)
}

export default Skills