import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	let number = props.seconds.toString();
	return (
		<div>
			<i className="fa-solid fa-clock"></i>
			<div className="segundos">{number[number.length - 1]}</div>
			<div className="minutos">{number[number.length - 2]}</div>
			<div className="horas">{number[number.length - 3]}</div>
			<div className="dias">{number[number.length - 4]}</div>
		</div>
	);
};

export default Home;
