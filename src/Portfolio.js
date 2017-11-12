import React, { Component } from 'react';
import logo from './logo.svg';
import './Portfolio.css';
import {Button} from 'react-bootstrap';
import Sticky from 'react-sticky-el';
import Scroll from 'react-scroll';
import { animateScroll } from 'react-scroll';
// import './bulma/css/bulma.css'
// var Button = require('react-button');

class ProjectTile extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="Tiles">
				<div
					class="container">
					<img
						width="450"
						height="325"
						src={this.props.value.image}
						title={this.props.value.name}
					/>
					<div onClick={() => this.props.onClick()} className="overlay">
    				<div className="text">{this.props.value.name}</div>
  				</div>
				</div>
			</div>
		);
	}
}

class ProjectInfo extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let Element = Scroll.Element;
		return (
			<Element name="info">
			<div className="Info">
				<h1><button type="button" className="btn btn-danger" onClick={() => this.props.close()}>x</button> {this.props.value.name}</h1>
				<img
					width="450"
					height="325"
					src={this.props.value.image}
				/>
				<p className="Description">{this.props.value.description}</p>
				<p><strong>Languages:</strong> {this.props.value.langs}</p>
				<a href={this.props.value.link}>Link</a>
			</div>
			</Element>
		);
	}
}

class ProjectList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			displaying: false,
			displayedProject: null,
			projects: props.projects
		}
	}

	displayProject(project) {
		this.setState({
			displaying: true,
			displayedProject: project
		});
		var scroller = Scroll.scroller;
		animateScroll.scrollTo(375, {
			duration: 0,
  		delay: 0,
  		smooth: true
		});
	}

	closeProject() {
		this.setState({
			displaying: false,
			displayedProject: null
		});
	}

	render() {
		if (!this.state.displaying) {
			return (
				<div>
					<h1>Projects</h1>
					<div className="TileList">
						{this.state.projects.map((project) => <ProjectTile onClick={() => this.displayProject(project)} value={project} />)}
					</div>
				</div>
			);
		}
		return (
			<ProjectInfo close={() => this.closeProject()} value={this.state.displayedProject} />
		);

	}
}

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="About">
				<h1>About</h1>
				<p>I am a 42 US student currently looking for a junior web development position or an internship. I have experience working in languages such as Javascript, HTML, C, C++, Python, Java, and Swift. I also have experience working in web frameworks such as React and A-Frame (WebVR). I recently finished an internship at Samsung Research America where I was a Full-Stack WebVR Engineer intern. During my time at Samsung I was in charge of creating a demo for the ARTIK team that was used to showcase their technology at the VMWorld 2017 convention in Las Vegas.</p>
				<a href="http://ryley.io/resume.pdf" type="button" className="btn btn-primary">Resume</a>
			</div>
		);
	}
}

class Portfolio extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: [
				{
					name: 'VMWorld IoT WebVR Demo',
					description: "This demo features a model of a bridge with various spinning coins surrounding it corresponding to sensors on a physical lego bridge. Looking at these coins displays the sensor's information. This project was displayed at VMWorld 2017 in Las Vegas.",
					image: require('./img/artik.png'),
					langs: "HTML, Python, Javascript",
					link: 'http://artik.ryley.io'
				},
				{
					name: 'Ram Hack',
					description: "The purpose of this project was to detect the amount of time spent idle by employees in desktop applications such as AutoCAD by measuring and analysing the amount of RAM being used by the application. It was awarded Best Overall Project at the 2017 AEC Hackathon in Portland.",
					image: require('./img/ramhack.png'),
					langs: "Python",
					link: 'https://github.com/rmatos42/AEC-Hackathon'
				},
				{
					name: 'K.I.F.T.',
					description: "K.I.F.T. is a speech recognition program. K.I.F.T. uses Carnegie Mellon University's speech recognition toolkit, CMUSPHINX. Audio recordings are sent to a server from a client program where the speech is then converted to text then sent back to the client. The client then executes the appropriate command.",
					image: require('./img/kift.png'),
					langs: "Python, C",
					link: 'https://github.com/rmatos42/K.I.F.T.'
				},
				{
					name: 'Fract-ol',
					description: 'Fract-ol is a project that uses complex mathimatical calculations to generate beautiful fractals that you can explore. It uses the MiniLibX library, a barebones wrapper for OpenGL.',
					image: require('./img/fractol.png'),
					langs: "C",
					link: 'https://github.com/rmatos42/fract-ol'
				},
				{
					name: 'Wolf3D',
					description: 'Wolf3D is a project that uses raycasting to recreate the engine used in the original Wolfenstein. It uses the MiniLibX library, a barebones wrapper for OpenGL.',
					image: require('./img/wolf3d.png'),
					langs: "C",
					link: 'https://github.com/rmatos42/Wolf3D'
				},
				{
					name: 'FDF',
					description: 'FDF is a project that creates a 3D wireframe given a text file with XYZ coordinates. It uses the MiniLibX library, a barebones wrapper for OpenGL.',
					image: require('./img/fdf.png'),
					langs: "C",
					link: 'https://github.com/rmatos42/FDF'
				},
				{
					name: "Ryley's Portfolio",
					description: 'This is the site you see now. It was created using React.JS.',
					image: require('./img/portfolio.png'),
					langs: "Javascript, HTML, CSS",
					link: 'https://github.com/rmatos42/portfolio'
				},
				{
					name: "ft_printf",
					description: 'Ft_print is a re-code of the function printf from the C standard library. It recreates all the original functionality of printf.',
					image: require('./img/printf.png'),
					langs: "C",
					link: 'https://github.com/rmatos42/ft_printf'
				}
			]
		}
	}

	render () {
		return (
			<div className="Portfolio">
				<Sticky className="sticky" mode="top">
					<header className="Portfolio-header">
						<h1>
							ryley.io
						</h1>
						<a
							href="http://artik.ryley.io"
							type="button"
							className="btn btn-info">
							ARTIK
						</a>
						<a
							href="https://github.com/rmatos42"
							type="button"
							className="btn btn-info">
							GITHUB
						</a>
						<a
							href="https://www.linkedin.com/in/ryleym/"
							type="button"
							className="btn btn-info">
							LINKEDIN
						</a>
					</header>
				</Sticky>
				<div className="ryleyInfo">
					<h1>Ryley Matos</h1>
					<img className="headshot" src={require('./img/rmatos.jpg')} />
					<h3>Software Engineer</h3>
				</div>
				<ProjectList projects={this.state.projects} />
				<About />
			</div>
		);
	};
}

export default Portfolio;
