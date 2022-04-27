import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	let number = props.seconds.toString();
	return (
		<div className="container">
			<div
				id="box"
				className="clockcounter d-flex justify-content-center">
				<i className="fa-solid fa-clock"></i>
				<div id="box" className="dias">
					{number[number.length - 4]
						? number[number.length - 4]
						: "0"}
				</div>
				<div id="box" className="horas">
					{number[number.length - 3]
						? number[number.length - 3]
						: "0"}
				</div>
				<div id="box" className="minutos">
					{number[number.length - 2]
						? number[number.length - 2]
						: "0"}
				</div>
				<div id="box" className="segundos">
					{number[number.length - 1]
						? number[number.length - 1]
						: "0"}
				</div>
			</div>
		</div>
	);
};

export default Home;
