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
					<li><Chip label="React.js" /></li>
					<li><Chip label="React Native" /></li>
					<li><Chip label="JavaScript" /></li>
					<li><Chip label="CSS3" /></li>
					<li><Chip label="HTML5" /></li>
				</ul>
			</section>
			<section>
				<h3>Back-End</h3>
				<ul>
					<li><Chip label="Node.js" /></li>
					<li><Chip label="TypeScript" /></li>
					<li><Chip label="GraphQL" /></li>
					<li><Chip label="Go" /></li>
					<li><Chip label="C#" /></li>
					<li><Chip label="PHP" /></li>
				</ul>
			</section>
			<section>
				<h3>Server // Database // CI // CD</h3>
				<ul>
					<li><Chip label="Unit Testing" /></li>
					<li><Chip label="Docker" /></li>
					<li><Chip label="Git" /></li>
					<li><Chip label="SQL" /></li>
					<li><Chip label="AWS" /></li>
					<li><Chip label="MongoDB" /></li>
					<li><Chip label="Redis" /></li>
				</ul>
			</section>
		</section>
	)
}

export default Skills