//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

const SimpleCounter = (props) => {
	return (
		<div className="box">
			<div className="timer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="50"
					height="50"
					fill="currentColor"
					className="bi bi-stopwatch pb-3"
					viewBox="0 0 16 16">
					<path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
					<path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
				</svg>
			</div>
			<div className="Four">{props.digFour % 10}</div>
			<div className="Three">{props.digThree % 10}</div>
			<div className="Two">{props.digTwo % 10}</div>
			<div className="One">{props.digOne % 10}</div>
		</div>
	);
};

SimpleCounter.propType = {
	digFour: propTypes.number,
	digThree: propTypes.number,
	digTwo: propTypes.number,
	digOne: propTypes.number,
};

let counter = 0;
setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digOne={one}
			digTwo={two}
			digThree={three}
			digFour={four}
		/>,

		document.querySelector("#app")
	);
}, 1000);

//render your react application
