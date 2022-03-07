import React from "react";
import propTypes from "prop-types";
//include images into your bundle

//create your first component
const SimpleCounter = (props) => {
	return (			
		<div className="box">
			<div className="timer"></div>
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
}, 1000




);



export default SimpleCounter;
